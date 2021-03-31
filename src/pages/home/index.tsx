import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummaryWithTargeting } from '../../components/others/accountSummaryWithTargeting'
import { useHomePage } from './hook'
import { TransferDialog } from './transferDialog'

import './styles.scss'
import { StatementsDialog } from './statementsDialog'

export function HomePage(props: RouteChildrenProps) {
    const { context, transferTarget, transferDialog, statementDialog, backToBegin } = useHomePage({})

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
                {(context.accounts || []).map((account, idx) =>
                    <AccountSummaryWithTargeting
                        key={idx}
                        account={account}
                        displayTransferTarget={transferTarget.isTarget(account)}
                        onStatement={statementDialog.open}
                        onTransfer={transferTarget.setSourceAccount}
                        onTargetSelected={transferTarget.setTargetAccount}
                    />
                )}
            </Container>

            <TransferDialog
                sourceAccount={transferTarget.sourceAccount}
                targetAccount={transferTarget.targetAccount}
                open={transferDialog.isOpen}
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