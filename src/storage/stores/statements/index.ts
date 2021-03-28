import { connection } from '../../db';
import { Statement } from './statement'
import { Account } from './../accounts/account'

function getStore() {
  return connection.transaction('statements').objectStore('statements')
}

async function add(statement: Partial<Statement>) {
    if (statement.value == null)
      throw new Error('Statement must have a value')
    if (!statement.accountId)
      throw new Error('Statement must be related to an account')
    if (!statement.description)
      throw new Error('Statement must have an description')
    if (statement.value < 0) {
      const balance = await getAccountsBalance(statement.accountId);
      if (balance + statement.value < 0)
          throw new Error('You do not have enoughs funds for this withdraw')  
    }

    statement.createdAt = new Date().toUTCString()

    const id = await connection.add('statements', statement as Required<Statement>)
    return await getStore().get(id) as Statement
}

async function getAll() {
    const store = getStore()
    return await store.getAll()
}

async function getAccountsStatements(accountId: number) {
  return await connection.getAllFromIndex('statements', 'by-account', accountId);
}

async function getAccountsBalance(accountId: number) {
  const statements = await getAccountsStatements(accountId);
  return statements.reduce((prev, cur) => prev + cur.value, 0)
}

export const StatementStore = {
    add,
    getAll,
    getAccountsBalance,
    getAccountsStatements
}