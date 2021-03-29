import * as React from 'react'
import { AccountsBalancesContext } from '../../contexts/accountsBalances/context'

export interface UseHomePageProps {
}

export function useHomePage(props:UseHomePageProps) {
    const context = React.useContext(AccountsBalancesContext)

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        ...context
    }
}