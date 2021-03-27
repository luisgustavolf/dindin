import { openDB } from 'idb';

const dbPromise = openDB('dindin-store', 1, {
  upgrade(db) {
    db.createObjectStore('keyval');
  },
});