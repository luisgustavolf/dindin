import { AccountWithBalance } from "../../services/account/types";

export interface AccountsBalancesContextValues {
    loading?: boolean
    accounts: AccountWithBalance[]
    update: () => void
}