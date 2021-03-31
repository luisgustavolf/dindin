import * as React from 'react'
import { AccountsBalancesContext } from '../../contexts/accountsBalances/context'
import { useTransferTarget } from './useTransferTarget'

export interface UseHomePageProps {
}

export function useHomePage(props:UseHomePageProps) {
    const context = React.useContext(AccountsBalancesContext)
    const targetHook = useTransferTarget({})

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        context,
        targetHook
    }
}