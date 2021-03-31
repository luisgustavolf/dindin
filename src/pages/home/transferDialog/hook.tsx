import { useAccounts } from './useAccounts'

export interface UseTransferDialogProps {
    sourceAccountId: number
    targetAccountId: number
}

export function useTransferDialog(props:UseTransferDialogProps) {
    const {  sourceAccountId, targetAccountId } = props
    
    const accounts = useAccounts({
        targetAccountId,
        sourceAccountId
    })

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        accounts
    }
}