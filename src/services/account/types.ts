import { Account } from '../../storage/stores/accounts/account'

export interface AccountWithBalance extends Account {
    balance: number
}