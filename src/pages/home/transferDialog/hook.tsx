import { useAccounts } from './useAccounts'
import { useDialogForm } from './useDialogForm'
import { useTransferService } from './useTransferService'

export interface UseTransferDialogProps {
    sourceAccountId: number
    targetAccountId: number
    onTransfer: () => void
}

export function useTransferDialog(props:UseTransferDialogProps) {
    const {  sourceAccountId, targetAccountId } = props
    
    const accounts = useAccounts({
        targetAccountId,
        sourceAccountId
    })

    const service = useTransferService({
        onTrade: props.onTransfer
    })

    const form = useDialogForm({
        onSubmit: (values) => {
            service.trade({
                sourceAccount: accounts.sourceAccount!,
                targetAccount: accounts.targetAccount!,
                value: values.amount
            })
        }
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
        accounts,
        form,
        service
    }
}