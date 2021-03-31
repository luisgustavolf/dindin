import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummaryWithTargeting } from '../../components/others/accountSummaryWithTargeting'
import { useHomePage } from './hook'
import './styles.scss'
import { TransferDialog } from './transferDialog'

export function HomePage(props: RouteChildrenProps) {
    const { context, targetHook } = useHomePage({})

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
                    accountId={account.id!} 
                    displayTransferTarget={targetHook.isTarget(account.id!)}
                    onStatement={() => {}}
                    onTransfer={targetHook.setSourceAccountId}
                    onTargetSelected={() => targetHook.setSourceAccountId(undefined)}
                />
            )}

            <TransferDialog 
                sourceAccountId={1}
                targetAccountId={2}
                open={true}
                onOk={() => {}}
                onCancel={() => {}}
            />
        </Container>
    )
}