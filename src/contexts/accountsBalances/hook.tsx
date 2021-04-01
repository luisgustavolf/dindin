import * as React from 'react'
import { AccountService } from '../../services/account'
import { AccountWithBalance } from '../../services/account/types'

export interface UseAccountsBalancesProviderProps { }

export function useAccountsBalancesProvider(props: UseAccountsBalancesProviderProps) {
    const [loading, setLoading] = React.useState(false)
    const [accounts, setAccounts] = React.useState<AccountWithBalance[]>([])

    // ---------------------------------------------
    // Functions

    const update = React.useCallback(async () => {
        setLoading(true)
        setAccounts(await AccountService.getAllWithBalances());
        setLoading(false)
    }, [])

    // ---------------------------------------------
    // Effects

    React.useEffect(() => {
        update()
    },[update])

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        loading,
        accounts,
        update
    }
}