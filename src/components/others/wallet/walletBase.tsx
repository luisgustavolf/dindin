import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import { EnumCurrency } from '../../../storage/stores/accounts/enumCurrency';

export interface WalletBaseProps {
    title: string
    balance: number
    currency: EnumCurrency
    onTransfer: () => void
    onStatements: () => void
}

export function WalletBase(props: WalletBaseProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Paper>
            <div className={'dd-wallet'}>
                <div className={'title'}>
                    {props.title}
                </div>
                <div className={'balance'}>
                    {props.currency}
                    {props.balance}
                </div>
                <div className={'footer'}>

                </div>
            </div>
        </Paper>
    )
}