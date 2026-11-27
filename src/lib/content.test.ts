import { test } from 'node:test';
import assert from 'node:assert/strict';
import { eventWhen, excerpt, imageSrcset, imageUrl, isPast, slugify, type Event } from './content.ts';

test('slugify keeps Italian names readable', () => {
  assert.equal(slugify("Basilica Minore dell'Addolorata"), 'basilica-minore-delladdolorata');
  assert.equal(slugify('’Ndocciata di Agnone'), 'ndocciata-di-agnone');
  assert.equal(slugify('Città  è  più!'), 'citta-e-piu');
});

test('imageUrl resizes Cloudinary only', () => {
  assert.equal(imageUrl('https://res.cloudinary.com/x/image/upload/v1/a.jpg', 640), 'https://res.cloudinary.com/x/image/upload/f_auto,q_auto,c_limit,w_640/v1/a.jpg');
  assert.equal(imageUrl('https://upload.wikimedia.org/a.jpg', 640), 'https://upload.wikimedia.org/a.jpg');
});

test('imageSrcset lists Cloudinary widths only', () => {
  assert.equal(
    imageSrcset('https://res.cloudinary.com/x/image/upload/v1/a.jpg', [320, 640]),
    'https://res.cloudinary.com/x/image/upload/f_auto,q_auto,c_limit,w_320/v1/a.jpg 320w, https://res.cloudinary.com/x/image/upload/f_auto,q_auto,c_limit,w_640/v1/a.jpg 640w',
  );
  assert.equal(imageSrcset('https://upload.wikimedia.org/a.jpg', [320, 640]), undefined);
});

const ev = (start_date: string, end_date: string | null, all_day = false) =>
  ({ start_date, end_date, all_day }) as Event;

test('eventWhen formats in Europe/Rome', () => {
  assert.equal(eventWhen(ev('2025-08-13T17:30:00+00:00', null)), 'mercoledì 13 agosto 2025, ore 19:30');
  assert.equal(eventWhen(ev('2025-08-13T00:00:00+02:00', null, true)), 'mercoledì 13 agosto 2025');
  assert.equal(eventWhen(ev('2025-08-13T17:30:00+00:00', '2025-08-13T21:59:59.999999+00:00')), 'mercoledì 13 agosto 2025, ore 19:30');
  assert.match(eventWhen(ev('2025-08-13T17:00:00+00:00', '2025-08-15T20:00:00+00:00')), /^dal mercoledì 13 agosto 2025 al venerdì 15 agosto 2025$/);
});

test('isPast uses the end date when there is one', () => {
  const now = new Date('2025-08-14T12:00:00Z');
  assert.equal(isPast(ev('2025-08-13T17:00:00Z', null), now), true);
  assert.equal(isPast(ev('2025-08-13T17:00:00Z', '2025-08-15T20:00:00Z'), now), false);
});

test('excerpt cuts on a word boundary', () => {
  assert.equal(excerpt('uno due tre quattro', 10), 'uno due…');
  assert.equal(excerpt('breve', 10), 'breve');
});
