import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { AccountSummaryBase } from '../../components/others/accountSummary/accountSummaryBase'
import { EnumCurrency } from '../../storage/stores/accounts/enumCurrency'

import './styles.scss';

export function PlaygroundPage(props: RouteChildrenProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'dd-playground'}>
            <AccountSummaryBase 
                title={'Reais'}
                balance={0}
                currency={EnumCurrency.BRL}
                onStatements={() => {}}
                onTransfer={() => {}}
            />

            <AccountSummaryBase 
                title={'Reais'}
                balance={0}
                currency={EnumCurrency.BRL}
                onStatements={() => {}}
                onTransfer={() => {}}
            />

            <AccountSummaryBase 
                title={'Reais'}
                balance={0}
                currency={EnumCurrency.BRL}
                onStatements={() => {}}
                onTransfer={() => {}}
            />
        </div>
    )
}