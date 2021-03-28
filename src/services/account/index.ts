import { AccountStore } from "../../storage/stores/account"
import { Account } from '../../storage/stores/account/account'

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