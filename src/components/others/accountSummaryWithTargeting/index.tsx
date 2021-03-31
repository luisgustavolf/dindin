import Button from '@material-ui/core/Button';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import * as React from 'react';
import { AccountWithBalance } from '../../../services/account/types';
import { AccountSummary, AccountSummaryProps } from '../accountSummary';

import './styles.scss';

export interface AccountSummaryWithTargetingProps extends AccountSummaryProps {
    displayTransferTarget?: boolean
    onTransfer: (account: AccountWithBalance) => void
    onStatement: (account: AccountWithBalance) => void
    onTargetSelected: (account: AccountWithBalance) => void
}

export function AccountSummaryWithTargeting(props: AccountSummaryWithTargetingProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'dd-targeting-wrap'}>
            <AccountSummary {...props}>
                <Button color="primary" onClick={() => props.onTransfer(props.account)}>Transferir</Button>
                <Button onClick={() => props.onStatement(props.account)}>Extrato</Button>
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
                                onClick={() => props.onTargetSelected(props.account)}
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