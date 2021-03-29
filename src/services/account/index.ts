import { AccountStore } from "../../storage/stores/accounts"
import { StatementStore } from "../../storage/stores/statements"
import { AccountWithBalance } from "./types";

async function getAll() {
    return await AccountStore.getAll()
}

async function getAllWithBalances() {
    const accountsWithBalances: AccountWithBalance[] = [];
    const accounts = await AccountStore.getAll();
    
    for (const account of accounts) {
        const balance = await getAccountBalance(account.id!);
        accountsWithBalances.push({
            ...account,
            balance
        })
    }

    return accountsWithBalances
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
    getAllWithBalances,
    getAccountsStatements,
    getAccountBalance
}