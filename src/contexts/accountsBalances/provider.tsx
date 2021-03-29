import * as React from 'react'
import { AccountsBalancesContext } from './context'
import { useAccountsBalancesProvider } from './hook'

export interface AccountsBalancesProviderProps {
    children?: any
}

export function AccountsBalancesProvider(props:AccountsBalancesProviderProps) {

    const hook = useAccountsBalancesProvider({})

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <AccountsBalancesContext.Provider value={hook}>
            {props.children}
        </AccountsBalancesContext.Provider>
    )
}