import { AccountStore } from "../../storage/stores/accounts"
import { StatementStore } from "../../storage/stores/statements"

async function getAll() {
    return await AccountStore.getAll()
}

async function get(id: number) {
    return await AccountStore.get(id)
}

async function getAccountsStatements(accountId: number) {
    return await StatementStore.getAccountsStatements(accountId)
}

async function getAccountBalance(accountId: number) {
    return await StatementStore.getAccountsBalance(accountId)
}

export const AccountService = {
    get,
    getAll,
    getAccountsStatements,
    getAccountBalance
}