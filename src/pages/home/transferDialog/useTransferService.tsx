import * as React from 'react'
import { DialogFormErrors } from './types'
import { Account } from '../../../storage/stores/accounts/account'
import { TraderService } from '../../../services/trader'

export interface UseTransferServiceProps {
    onTrade: () => void
}

export function useTransferService(props:UseTransferServiceProps) {
    const onTradeRef = React.useRef(props.onTrade)
    onTradeRef.current = props.onTrade
    
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState<DialogFormErrors>()

    // ---------------------------------------------
    // Functions

    const trade = React.useCallback(async (props: {
        sourceAccount: Account
        targetAccount: Account
        value: number
    }) => {
        try {
            setLoading(true)
            await TraderService.trade(props)
            setLoading(false)
            onTradeRef.current()
        } catch (error) {
            setLoading(false)
            setErrors({ amount: error.message })
        }
    }, [])

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        loading,
        errors,
        trade
    }
}