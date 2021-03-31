import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummaryWithTargeting } from '../../components/others/accountSummaryWithTargeting'
import { useHomePage } from './hook'
import { TransferDialog } from './transferDialog'

import './styles.scss'
import { StatementsDialog } from './statementsDialog'

export function HomePage(props: RouteChildrenProps) {
    const { context, transferTarget, openDialog, backToBegin } = useHomePage({})

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
                        onStatement={() => { }}
                        onTransfer={transferTarget.setSourceAccount}
                        onTargetSelected={transferTarget.setTargetAccount}
                    />
                )}
            </Container>

            <TransferDialog
                sourceAccount={transferTarget.sourceAccount}
                targetAccount={transferTarget.targetAccount}
                open={openDialog}
                onOk={() => backToBegin(true)}
                onCancel={() => backToBegin(false)}
            />

            <StatementsDialog
                account={{id: 1} as any}
                open={true}
                onClose={() => {}}
            />
        </React.Fragment>

    )
}