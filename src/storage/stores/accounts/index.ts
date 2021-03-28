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

    const id = await connection.add('accounts', item as Required<Account>)
    return await getStore().get(id) as Account
}

async function getAll() {
    const store = getStore()
    return await store.getAll()
}

export const AccountStore = {
    save,
    getAll
}