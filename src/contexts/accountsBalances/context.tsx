import * as React from 'react'
import { AccountsBalancesContextValues } from './types'

export const AccountsBalancesContext = React.createContext<AccountsBalancesContextValues>({ 
    accounts: [],
    update: () => {}
})