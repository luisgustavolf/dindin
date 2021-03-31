import * as React from 'react'
import { Account } from "../../storage/stores/accounts/account";

export interface UseStatementDialogProps {
    
}

export function useStatementDialog(props:UseStatementDialogProps) {
    const [account, setAccount] = React.useState<Account>()
    
    // ---------------------------------------------
    // Functions

    const open = React.useCallback((account: Account) => {
        setAccount(account)
    }, [])

    const close = React.useCallback(() => {
        setAccount(undefined)
    }, [])

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations

    const isOpen = !!account

    // ---------------------------------------------
    // API
    
    return {
        isOpen,
        account,
        open,
        close
    }
}