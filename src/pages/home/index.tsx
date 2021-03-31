import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummaryWithTargeting } from '../../components/others/accountSummaryWithTargeting'
import { useHomePage } from './hook'
import './styles.scss'
import { TransferDialog } from './transferDialog'

export function HomePage(props: RouteChildrenProps) {
    const { context, transferTarget, transferDialog } = useHomePage({})

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Container 
            maxWidth={"lg"}
            className={'dd-home-page'}
            style={{height: '100vh'}} 
        >
            {(context.accounts || []).map((account, idx) => 
                <AccountSummaryWithTargeting 
                    key={idx} 
                    account={account} 
                    displayTransferTarget={transferTarget.isTarget(account)}
                    onStatement={() => {}}
                    onTransfer={transferTarget.setSourceAccount}
                    onTargetSelected={() => transferTarget.setSourceAccount(undefined)}
                />
            )}

            <TransferDialog 
                sourceAccount={transferTarget.sourceAccount}
                targetAccount={transferTarget.targetAccount}
                open={transferDialog.open}
                onOk={() => {}}
                onCancel={() => {}}
            />
        </Container>
    )
}