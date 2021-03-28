import { AccountStore } from "../../storage/stores/accounts"
import { Account } from '../../storage/stores/accounts/account'

async function add(account: Partial<Account>) {
    return await AccountStore.save(account)
}

async function getAll() {
    return await AccountStore.getAll()
}

export const AccountService = {
    add,
    getAll
}