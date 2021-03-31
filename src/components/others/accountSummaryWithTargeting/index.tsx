import Button from '@material-ui/core/Button';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import * as React from 'react';
import { AccountSummary, AccountSummaryProps } from '../accountSummary';

import './styles.scss';

export interface AccountSummaryWithTargetingProps extends AccountSummaryProps {
    displayTransferTarget?: boolean
    onTransfer: (accountId: number) => void
    onStatement: (accountId: number) => void
    onTargetSelected: (accountId: number) => void
}

export function AccountSummaryWithTargeting(props: AccountSummaryWithTargetingProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'dd-targeting-wrap'}>
            <AccountSummary {...props}>
                <Button color="primary" onClick={() => props.onTransfer(props.accountId)}>Transferir</Button>
                <Button onClick={() => props.onStatement(props.accountId)}>Extrato</Button>
            </AccountSummary>

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
                                onClick={() => props.onTargetSelected(props.accountId)}
                            >
                                Para cá
                            </Button>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}