import * as React from 'react'
import { AccountService } from '../../services/account'
import { Account } from './../../storage/stores/accounts/account'

export interface UseHomePageProps {
}

export function useHomePage(props:UseHomePageProps) {
    const [accounts, setAccounts] = React.useState<Account[]>([])

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects

    React.useEffect(() => {
        (async () => {
            setAccounts(await AccountService.getAll())
        })()
    }, [])

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        accounts
    }
}