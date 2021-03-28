import { IDBPDatabase, openDB } from 'idb';
import { DindinDbSchema } from './schema';

export let connection: IDBPDatabase<DindinDbSchema>;

export async function connect() {
  connection = await connectAndSetupDb()
  return connection
}

async function connectAndSetupDb() {
  return await openDB<DindinDbSchema>('dindin-store', 1, {
    upgrade(db) {
      db.createObjectStore('accounts', { keyPath: "id", autoIncrement: true });
      const statements = db.createObjectStore('statements', { keyPath: "id", autoIncrement: true });
      statements.createIndex('by-account', 'accountId');
    },
  });
}