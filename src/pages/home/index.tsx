import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummary } from '../../components/others/accountSummary'
import { useHomePage } from './hook'
import { StatementsDialog } from './statementsDialog'
import { TransferDialog } from './transferDialog'

import './styles.scss'

export function HomePage(props: RouteChildrenProps) {
    const { context, transferManager, statementDialog, backToBegin } = useHomePage({})

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <React.Fragment>
            <Container
                maxWidth={"lg"}
                className={'dd-home-page'}
                style={{ height: '100vh' }}
            >
                {context.accounts.map((account, idx) =>
                    <AccountSummary
                        key={idx}
                        account={account}
                        displayTransferTarget={transferManager.isTarget(account)}
                        onStatement={statementDialog.open}
                        onTransfer={transferManager.setSourceAccount}
                        onTargetSelected={transferManager.setTargetAccount}
                    />
                )}
            </Container>

            <TransferDialog
                sourceAccount={transferManager.sourceAccount}
                targetAccount={transferManager.targetAccount}
                open={transferManager.isReadyToTransfer}
                onOk={() => backToBegin(true)}
                onCancel={() => backToBegin(false)}
            />

            <StatementsDialog
                account={statementDialog.account}
                open={statementDialog.isOpen}
                onClose={statementDialog.close}
            />
        </React.Fragment>

    )
}