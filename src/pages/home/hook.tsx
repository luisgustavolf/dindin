import * as React from 'react'
import { AccountsBalancesContext } from '../../contexts/accountsBalances/context'
import { useTransferDialog } from './useTransferDialog'
import { useTransferTarget } from './useTransferTarget'

export interface UseHomePageProps {
}

export function useHomePage(props:UseHomePageProps) {
    const context = React.useContext(AccountsBalancesContext)
    const transferTarget = useTransferTarget({})
    const transferDialog = useTransferDialog({})
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
        transferTarget,
        transferDialog
    }
}