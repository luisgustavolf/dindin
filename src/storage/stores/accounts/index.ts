import { connection } from '../../db';
import { Account } from './account'

function getStore() {
  return connection.transaction('accounts').objectStore('accounts')
}

async function getAll() {
  const store = getStore()
  return await store.getAll()
}

async function get(id: number) {
  const store = getStore()
  return await store.get(id)
}

async function add(item: Partial<Account>) {
    if (!item.name)
      throw new Error('Account name cannot be blank')
    if (!item.currency)
      throw new Error('Account currency name cannot be blank')

    const id = await connection.add('accounts', item as Required<Account>)
    return await getStore().get(id) as Account
}

export const AccountStore = {
    add,
    get,
    getAll
}