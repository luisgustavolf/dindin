import { Button, CircularProgress, Paper } from '@material-ui/core'
import * as React from 'react'
import { AccountWithBalance } from '../../../services/account/types'
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

import './styles.scss'

export interface AccountSummaryProps {
    account: AccountWithBalance
    loading?: boolean
    displayTransferTarget?: boolean
    onTransfer: (account: AccountWithBalance) => void
    onStatement: (account: AccountWithBalance) => void
    onTargetSelected: (account: AccountWithBalance) => void
}

export function AccountSummary(props:AccountSummaryProps) {

    // ---------------------------------------------
    // Transformations

    const formattedBalance = (props.account.balance || 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    // ---------------------------------------------
    // Render

    return (
        <div className={'dd-targeting-wrap'}>
            <Paper className={`dd-account-summary`}>
                {props.loading && 
                    <CircularProgress />
                }

                {!props.loading && 
                    <React.Fragment>
                        <div className={'title-wrap'}>
                            <div className={'title'}>
                                {props.account.name} ({props.account.currency})
                            </div>
                        </div>
                        <div className={'balance'}>
                            {formattedBalance}
                        </div>
                        <div className={'footer'}>
                            <Button color="primary" onClick={() => props.onTransfer(props.account)}>Transfer</Button>
                            <Button onClick={() => props.onStatement(props.account)}>Statements</Button>
                        </div>
                    </React.Fragment>
                }
            </Paper>

            {props.displayTransferTarget &&
                <React.Fragment>
                    <div className={'tw-overlay'}></div>
                    <div className={'tw-content-wrap'}>
                        <div className={'content'}>
                            <Button
                                variant="contained"
                                color="primary"
                                size={'large'}
                                startIcon={<PlayForWorkIcon fontSize={'large'} />}
                                onClick={() => props.onTargetSelected(props.account)}
                            >
                                Here
                            </Button>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}