import * as React from 'react'
import { AccountsBalancesContext } from '../../contexts/accountsBalances/context'
import { useTransferTarget } from './useTransferTarget'

export interface UseHomePageProps {
}

export function useHomePage(props:UseHomePageProps) {
    const context = React.useContext(AccountsBalancesContext)
    const transferTarget = useTransferTarget({})
    const { update } = context
    const { reset } = transferTarget 
    
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

    const openDialog = !!(transferTarget.sourceAccount && transferTarget.targetAccount)

    // ---------------------------------------------
    // API
    
    return {
        context,
        transferTarget,
        openDialog,
        backToBegin
    }
}