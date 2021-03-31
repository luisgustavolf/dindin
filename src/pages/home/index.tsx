import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummaryWithTargeting } from '../../components/others/accountSummaryWithTargeting'
import { useHomePage } from './hook'
import './styles.scss'

export function HomePage(props: RouteChildrenProps) {
    const { accounts } = useHomePage({})

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
            {(accounts || []).map((account, idx) => 
                <AccountSummaryWithTargeting 
                    key={idx} 
                    accountId={account.id!} 
                    onStatement={() => {}}
                    onTransfer={() => {}}
                    onTargetSelected={() => {}}
                />
            )}
        </Container>
    )
}