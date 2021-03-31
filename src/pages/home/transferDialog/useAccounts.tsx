import * as React from 'react'
import { AccountsBalancesContext } from '../../../contexts/accountsBalances/context'

export interface UseAccountsProps {
    sourceAccountId: number
    targetAccountId: number
}

export function useAccounts(props:UseAccountsProps) {
    const context = React.useContext(AccountsBalancesContext)

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations

    const sourceAccount = context.accounts?.find((account) => account.id === props.sourceAccountId)
    const targetAccount = context.accounts?.find((account) => account.id === props.targetAccountId)

    // ---------------------------------------------
    // API
    
    return {
        sourceAccount,
        targetAccount
    }
}