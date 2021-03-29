import * as React from 'react'
import { AccountService } from '../../services/account'
import { AccountWithBalance } from '../../services/account/types'

export interface UseAccountsBalancesProviderProps {
    
}

export function useAccountsBalancesProvider(props:UseAccountsBalancesProviderProps) {
    const [loading, setLoading] = React.useState(false)
    const [accounts, setAccounts] = React.useState<AccountWithBalance[]>()

    // ---------------------------------------------
    // Functions

    const update = React.useCallback(async () => {
        const list = await AccountService.getAll();
    }, [])

    // ---------------------------------------------
    // Effects
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