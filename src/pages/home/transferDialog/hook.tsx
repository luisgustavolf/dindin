import { Account } from '../../../storage/stores/accounts/account'
import { useDialogForm } from './useDialogForm'
import { useTransferService } from './useTransferService'

export interface UseTransferDialogProps {
    sourceAccount?: Account
    targetAccount?: Account
    onTransfer: () => void
}

export function useTransferDialog(props:UseTransferDialogProps) {
    const {  sourceAccount, targetAccount } = props
    
    const service = useTransferService({
        onTrade: props.onTransfer
    })

    const form = useDialogForm({
        onSubmit: (values) => {
            service.trade({
                sourceAccount: sourceAccount!,
                targetAccount: targetAccount!,
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
        form,
        service
    }
}