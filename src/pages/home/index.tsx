import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { AccountSummary } from '../../components/others/accountSummary'
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
                <AccountSummary 
                    key={idx} 
                    accountId={account.id!} 
                    onStatements={() => {}}
                    onTransfer={() => {}}
                />
            )}
        </Container>
    )
}