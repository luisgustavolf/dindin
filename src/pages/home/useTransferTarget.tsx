import * as React from 'react';
import { AccountWithBalance } from '../../services/account/types';
import { Account } from '../../storage/stores/accounts/account';

export interface UseTransferTargetProps { }

export function useTransferTarget(props: UseTransferTargetProps) {
    const [sourceAccount, setSourceAccount] = React.useState<AccountWithBalance>();
    const [targetAccount, setTargetAccount] = React.useState<AccountWithBalance>();

    // ---------------------------------------------
    // Functions

    const isTarget = React.useCallback((account: Account) => {
        return !!(sourceAccount && sourceAccount.id !== account.id)
    }, [sourceAccount]) 

    const reset = React.useCallback(() => {
        setTargetAccount(undefined)
        setSourceAccount(undefined)
    }, []) 

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        sourceAccount, 
        targetAccount, 
        setTargetAccount,
        setSourceAccount,
        reset,
        isTarget
    }
}