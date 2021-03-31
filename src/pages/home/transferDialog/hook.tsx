import { useEffect } from 'react'
import { Account } from '../../../storage/stores/accounts/account'
import { useDialogForm } from './useDialogForm'
import { useTransferService } from './useTransferService'

export interface UseTransferDialogProps {
    open: boolean
    sourceAccount?: Account
    targetAccount?: Account
    onTransfer: () => void
}

export function useTransferDialog(props:UseTransferDialogProps) {
    const { sourceAccount, targetAccount, open } = props
    
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

    const { reset } = form
    
    useEffect(() => {
        reset()
    } , [open, reset])

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        form,
        service
    }
}