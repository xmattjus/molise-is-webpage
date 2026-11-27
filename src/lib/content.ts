// Build-time content from the app's Supabase project (read-only publishable key, RLS applies).
const SUPABASE_URL = import.meta.env?.SUPABASE_URL ?? process.env.SUPABASE_URL ?? 'https://tnxiujpgzrdeyaoqxwcy.supabase.co';
const SUPABASE_KEY = import.meta.env?.SUPABASE_KEY ?? process.env.SUPABASE_KEY;

export type CategoryKey = 'nature' | 'history' | 'folklore' | 'food' | 'experience' | 'allure';

export const categories: Record<CategoryKey, { slug: string; label: string; title: string; tone: 'mint' | 'sky' | 'peach' }> = {
  nature: { slug: 'natura', label: 'Natura', title: 'Natura in Molise', tone: 'mint' },
  history: { slug: 'storia', label: 'Storia', title: 'Storia in Molise', tone: 'peach' },
  folklore: { slug: 'folklore', label: 'Folklore', title: 'Folklore e tradizioni in Molise', tone: 'sky' },
  food: { slug: 'cibo', label: 'Cibo', title: 'Cibo e sapori del Molise', tone: 'peach' },
  experience: { slug: 'esperienze', label: 'Esperienze', title: 'Esperienze in Molise', tone: 'mint' },
  allure: { slug: 'attrazioni', label: 'Attrazioni', title: 'Attrazioni in Molise', tone: 'sky' },
};

export interface Media {
  url: string;
  width: number;
  height: number;
  author: string | null;
  license: string | null;
  license_url: string | null;
  description: string | null;
}

interface Row {
  id: number;
  name: string;
  description: string | null;
  category: CategoryKey | 'unknown';
  latitude: number;
  longitude: number;
  cities: { name: string } | null;
  media: Media[];
}

export interface Place extends Row {
  kind: 'place';
  slug: string;
}

export interface Event extends Row {
  kind: 'event';
  slug: string;
  start_date: string;
  end_date: string | null;
  all_day: boolean;
}

async function select<T>(table: string, query: string): Promise<T[]> {
  if (!SUPABASE_KEY) {
    throw new Error(
      `SUPABASE_KEY is not set: the build reads ${table} from Supabase. Set it to the project's publishable (anon) key.`,
    );
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
    headers: { apikey: SUPABASE_KEY, Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Supabase ${table}: HTTP ${res.status} ${await res.text()}`);
  return res.json();
}

const mediaSelect = 'media(url,width,height,author,license,license_url,description,deleted_at)';

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Same name twice gets the id appended, so every URL stays unique.
function withSlugs<T extends { id: number; name: string }>(rows: T[]): (T & { slug: string })[] {
  const counts = new Map<string, number>();
  for (const r of rows) counts.set(slugify(r.name), (counts.get(slugify(r.name)) ?? 0) + 1);
  return rows.map((r) => {
    const base = slugify(r.name);
    return { ...r, slug: counts.get(base)! > 1 ? `${base}-${r.id}` : base };
  });
}

const activeMedia = <T extends { media: (Media & { deleted_at?: string | null })[] }>(r: T): T => ({
  ...r,
  media: r.media.filter((m) => !m.deleted_at),
});

let cache: Promise<{ places: Place[]; events: Event[] }> | undefined;

export function loadContent() {
  cache ??= (async () => {
    const [places, events] = await Promise.all([
      select<Row>('places', `select=id,name,description,category,latitude,longitude,cities(name),${mediaSelect}&deleted_at=is.null&order=name`),
      select<Row & { start_date: string; end_date: string | null; all_day: boolean }>(
        'events',
        `select=id,name,description,category,latitude,longitude,start_date,end_date,all_day,cities(name),${mediaSelect}&deleted_at=is.null&order=start_date.desc`,
      ),
    ]);
    return {
      places: withSlugs(places.map(activeMedia)).map((p) => ({ ...p, kind: 'place' as const })),
      events: withSlugs(events.map(activeMedia)).map((e) => ({ ...e, kind: 'event' as const })),
    };
  })();
  return cache;
}

export const hasText = (r: { description: string | null }) => (r.description ?? '').trim().length > 0;

// Places without a description get no page; events always do, but stay noindex until described.
export const isPublishedPlace = hasText;

export function isPast(e: Event, now = new Date()) {
  return new Date(e.end_date ?? e.start_date) < now;
}

export function paragraphs(text: string | null): string[] {
  return (text ?? '').split(/\n+/).map((p) => p.trim()).filter(Boolean);
}

export function excerpt(text: string | null, max = 155): string {
  const flat = (text ?? '').replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return flat.slice(0, flat.lastIndexOf(' ', max - 1)) + '…';
}

// Cloudinary serves resized, modern formats on request; other hosts are used as they are.
export function imageUrl(url: string, width: number): string {
  return url.includes('res.cloudinary.com') && url.includes('/upload/')
    ? url.replace('/upload/', `/upload/f_auto,q_auto,c_limit,w_${width}/`)
    : url;
}

// Widths for a srcset; undefined when the host cannot resize, so the plain src is used.
export function imageSrcset(url: string, widths: number[]): string | undefined {
  return imageUrl(url, 1) === url ? undefined : widths.map((w) => `${imageUrl(url, w)} ${w}w`).join(', ');
}

const dateFmt = new Intl.DateTimeFormat('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome' });
const timeFmt = new Intl.DateTimeFormat('it-IT', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome' });
const dayKey = (d: Date) => d.toLocaleDateString('it-IT', { timeZone: 'Europe/Rome' });

export function eventWhen(e: Event): string {
  const start = new Date(e.start_date);
  const end = e.end_date ? new Date(e.end_date) : null;
  if (end && dayKey(end) !== dayKey(start)) return `dal ${dateFmt.format(start)} al ${dateFmt.format(end)}`;
  if (e.all_day) return dateFmt.format(start);
  return `${dateFmt.format(start)}, ore ${timeFmt.format(start)}${end ? `–${timeFmt.format(end)}` : ''}`;
}

export function directionsUrl(r: { latitude: number; longitude: number }) {
  return `https://www.google.com/maps/dir/?api=1&destination=${r.latitude},${r.longitude}`;
}
