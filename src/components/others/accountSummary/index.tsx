import * as React from 'react'
import { AccountWithBalance } from '../../../services/account/types'
import { AccountSummaryBase } from './accountSummaryBase'
import { useAccountSummary } from './hook'

export interface AccountSummaryProps {
    account: AccountWithBalance
    size?: 'regular' | 'small'
    children?: any
}

export function AccountSummary(props:AccountSummaryProps) {

    const { loading, name, currency, balance } = useAccountSummary(props)

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <AccountSummaryBase
            loading={loading}
            title={name}
            balance={balance}
            currency={currency}
            size={props.size}
            children={props.children}
        />
    )
}