import { TraderService } from '../../../services/trader'
import { useAccounts } from './useAccounts'
import { useDialogForm } from './useDialogForm'

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

    const form = useDialogForm({
        onSubmit: async (values) => {
            await TraderService.trade({
                sourceAccount: accounts.sourceAccount!,
                targetAccount: accounts.targetAccount!,
                value: values.amount
            })

            props.onTransfer()
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
        form 
    }
}