import * as React from 'react'
import { AccountsBalancesContext } from '../../contexts/accountsBalances/context'
import { useStatementDialog } from './useStatementDialog'
import { useTransferManager } from './useTransferTarget'

export interface UseHomePageProps {
}

export function useHomePage(props:UseHomePageProps) {
    const context = React.useContext(AccountsBalancesContext)
    const transferManager = useTransferManager({})
    const statementDialog = useStatementDialog({})

    const { update } = context
    const { reset } = transferManager 
    
    // ---------------------------------------------
    // Functions

    const backToBegin = React.useCallback((updateAccounts?: boolean) => {
        if (updateAccounts)
            update();
        reset()
    }, [reset, update])
    
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        context,
        transferManager,
        statementDialog,
        backToBegin
    }
}