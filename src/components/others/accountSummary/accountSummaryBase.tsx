import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { EnumCurrency } from '../../../storage/stores/accounts/enumCurrency';

import './styles.scss';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface AccountSummaryBaseProps {
    title?: string
    balance?: number
    currency?: EnumCurrency
    loading?: boolean
    onTransfer: () => void
    onStatements: () => void
}

export function AccountSummaryBase(props: AccountSummaryBaseProps) {

    // ---------------------------------------------
    // Transformations

    const formattedBalance = props.balance && props.balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    // ---------------------------------------------
    // Render

    return (
        <Paper className={'dd-account-summary'}>
            {props.loading && 
                <CircularProgress />
            }

            {!props.loading && 
                <React.Fragment>
                    <div className={'title-wrap'}>
                        <div className={'title'}>
                            {props.title} ({props.currency})
                        </div>
                    </div>
                    <div className={'balance'}>
                        {formattedBalance}
                    </div>
                    <div className={'footer'}>
                        <Button color="primary" onClick={props.onTransfer}>Transferir</Button>
                        <Button onClick={props.onStatements}>Extrato</Button>
                    </div>
                </React.Fragment>
            }
        </Paper>
    )
}