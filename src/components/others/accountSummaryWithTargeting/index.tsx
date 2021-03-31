import * as React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import { AccountSummary, AccountSummaryProps } from '../accountSummary';
import './styles.scss';


export interface AccountSummaryWithTargetingProps extends AccountSummaryProps {
    displayTarget?: boolean
    onTransfer: () => void
    onStatement: () => void
    onTargetSelected: () => void
}

export function AccountSummaryWithTargeting(props: AccountSummaryWithTargetingProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'dd-targeting-wrap'}>
            <AccountSummary {...props}>
                <Button color="primary" onClick={props.onTransfer}>Transferir</Button>
                <Button onClick={props.onStatement}>Extrato</Button>
            </AccountSummary>

            <div className={'tw-overlay'}>s</div>
            <div className={'tw-content-wrap'}>
                <div className={'content'}>
                    <Button
                        variant="contained"
                        color="primary"
                        size={'large'}
                        startIcon={ <PlayForWorkIcon fontSize={'large'} />}
                    >
                        Para cá
                    </Button>

                </div>
            </div>
        </div>
    )
}