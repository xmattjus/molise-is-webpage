import { categories, excerpt, imageUrl, type Event, type Place } from './content';

const site = 'https://moliseis.it';

function address(item: Place | Event) {
  return {
    '@type': 'PostalAddress',
    ...(item.cities ? { addressLocality: item.cities.name } : {}),
    addressRegion: 'Molise',
    addressCountry: 'IT',
  };
}

const geo = (item: Place | Event) => ({ '@type': 'GeoCoordinates', latitude: item.latitude, longitude: item.longitude });

export function itemStructuredData(item: Place | Event, url: string) {
  const images = item.media.map((m) => imageUrl(m.url, 1200));
  const cat = item.category === 'unknown' ? undefined : categories[item.category];
  const crumbs = [
    { name: 'Molise Is', item: `${site}/` },
    item.kind === 'event'
      ? { name: 'Eventi', item: `${site}/eventi/` }
      : cat && { name: cat.label, item: `${site}/scopri/${cat.slug}/` },
    { name: item.name, item: url },
  ].filter(Boolean) as { name: string; item: string }[];

  const main =
    item.kind === 'place'
      ? {
          '@type': 'TouristAttraction',
          name: item.name,
          description: excerpt(item.description, 300),
          url,
          image: images,
          geo: geo(item),
          address: address(item),
        }
      : {
          '@type': 'Event',
          name: item.name,
          ...(item.description ? { description: excerpt(item.description, 300) } : {}),
          url,
          image: images,
          startDate: item.start_date,
          ...(item.end_date ? { endDate: item.end_date } : {}),
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: { '@type': 'Place', name: item.cities?.name ?? item.name, geo: geo(item), address: address(item) },
        };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      main,
      {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
      },
    ],
  };
}
