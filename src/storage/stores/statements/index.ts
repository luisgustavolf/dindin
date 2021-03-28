import { connection } from '../../db';
import { Statement } from './statement'

function getStore() {
  return connection.transaction('statements').objectStore('statements')
}

async function save(item: Partial<Statement>) {
    if (item.value == null)
      throw new Error('Statement must have a value')
    if (!item.accountId)
      throw new Error('Statement must be related to an account')
    if (!item.description)
      throw new Error('Statement must have an description')

    item.createdAt = new Date().toUTCString()

    const id = await connection.add('statements', item as Required<Statement>)
    return await getStore().get(id) as Statement
}

async function getAll() {
    const store = getStore()
    return await store.getAll()
}

export const StatementStore = {
    save,
    getAll
}