import { Container } from '@material-ui/core'
import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { WalletBase } from '../../components/others/wallet/walletBase'
import { EnumCurrency } from '../../storage/stores/accounts/enumCurrency'

import './styles.scss'

export function HomePage(props: RouteChildrenProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Container maxWidth="lg" style={{height: '100vh'}} >
            <WalletBase 
                title={'Reais'}
                balance={1000}
                currency={EnumCurrency.BRL}
                onStatements={() => {}}
                onTransfer={() => {}}
            />
        </Container>
    )
}