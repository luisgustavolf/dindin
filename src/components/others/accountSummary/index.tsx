import { Button, CardActions, CardContent, CircularProgress, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import * as React from 'react';
import { AccountWithBalance } from '../../../services/account/types';

import './styles.scss';

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
            <Card className={`dd-account-summary`}>
                
                {props.loading && 
                    <CircularProgress />
                }

                {!props.loading && 
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {props.account.name}
                            </Typography>
                            <Typography color={'textSecondary'}>
                                {props.account.currency}
                            </Typography>
                            <Typography variant="h2" component="h2">
                                {formattedBalance}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="primary" onClick={() => props.onTransfer(props.account)}>Transfer to</Button>
                            <Button onClick={() => props.onStatement(props.account)}>Statements</Button>
                        </CardActions>
                    </React.Fragment>
                }
            </Card>

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