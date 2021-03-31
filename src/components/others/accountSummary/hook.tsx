import * as React from 'react'
import { AccountsBalancesContext } from '../../../contexts/accountsBalances/context'
import { Account } from '../../../storage/stores/accounts/account'

export interface UseAccountSummaryProps {
    account: Account
}

export function useAccountSummary(props:UseAccountSummaryProps) {
    const context = React.useContext(AccountsBalancesContext);
    const accountWithBalance = context.accounts?.find((account) => account.id === props.account.id)

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