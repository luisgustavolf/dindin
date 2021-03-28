import { connection } from '../../db';
import { Account } from './account'

function getStore() {
  return connection.transaction('accounts').objectStore('accounts')
}

async function save(item: Partial<Account>) {
    if (!item.name)
      throw new Error('Account name cannot be blank')
    if (!item.slug)
      throw new Error('Account slug name cannot be blank')

    return await connection.add('accounts', { name: item.name! })
}

async function getAll() {
    const store = getStore()
    return await store.getAll()
}

export const AccountStore = {
    save,
    getAll
}