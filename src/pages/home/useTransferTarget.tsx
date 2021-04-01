import * as React from 'react';
import { AccountWithBalance } from '../../services/account/types';
import { Account } from '../../storage/stores/accounts/account';

export interface UseTransferManagerProps { }

export function useTransferManager(props: UseTransferManagerProps) {
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

    const isReadyToTransfer = !!(sourceAccount && targetAccount)

    // ---------------------------------------------
    // API
    
    return {
        sourceAccount, 
        targetAccount, 
        isReadyToTransfer,
        setTargetAccount,
        setSourceAccount,
        reset,
        isTarget
    }
}