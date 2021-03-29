import * as React from 'react'
import { AccountsBalancesContext } from '../../../contexts/accountsBalances/context'

export interface UseAccountSummaryProps {
    accountId: number
}

export function useAccountSummary(props:UseAccountSummaryProps) {
    const context = React.useContext(AccountsBalancesContext);
    const accountWithBalance = context.accounts?.find((account) => account.id === props.accountId)

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        loading: context.loading,
        ...accountWithBalance       
    }
}