import * as React from 'react'
import { AccountSummaryBase } from './accountSummaryBase'
import { useAccountSummary } from './hook'

export interface AccountSummaryProps {
    accountId: number
    onTransfer: () => void
    onStatements: () => void
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
            onStatements={() => {}}
            onTransfer={() => {}}
        />
    )
}