import * as React from 'react'
import { AccountSummaryBase } from './accountSummaryBase'

export interface AccountSummaryProps {
    accountId: number
    onTransfer: () => void
    onStatements: () => void
}

export function AccountSummary(props:AccountSummaryProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <AccountSummaryBase
            onStatements={() => {}}
            onTransfer={() => {}}
        />
    )
}