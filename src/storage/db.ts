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
      db.createObjectStore('accounts', { autoIncrement: true });
      const statements = db.createObjectStore('statements', { autoIncrement: true });
      statements.createIndex('by-account', 'accountId');
    },
  });
}