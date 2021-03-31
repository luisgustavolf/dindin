import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import { EnumCurrency } from '../../../storage/stores/accounts/enumCurrency';

import './styles.scss';

export interface AccountSummaryBaseProps {
    title?: string
    balance?: number
    currency?: EnumCurrency
    loading?: boolean
    size?: 'regular' | 'small'
    children?: any
}

export function AccountSummaryBase(props: AccountSummaryBaseProps) {

    // ---------------------------------------------
    // Transformations

    const formattedBalance = props.balance && props.balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    const size = props.size || 'regular';

    // ---------------------------------------------
    // Render

    return (
        <Paper className={`dd-account-summary size-${size}`}>
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
                        {props.children}
                    </div>
                </React.Fragment>
            }
        </Paper>
    )
}