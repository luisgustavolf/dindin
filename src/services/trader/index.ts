import { Account } from '../../storage/stores/accounts/account'
import { StatementStore } from '../../storage/stores/statements'
import { CurrencyService } from '../currency'

async function trade(props: {
    sourceAccount: Account
    targetAccount: Account
    value: number
}) {
    const equivalentValue = CurrencyService.calculateEquivalentValue({
        sourceCurrency: props.sourceAccount.currency,
        targetCurrency: props.targetAccount.currency,
        value: props.value
    })
    
    // withdraw
    await StatementStore.add({ 
        accountId: props.sourceAccount.id,
        description: `Transfer for account ${props.targetAccount.name}`,
        value: props.value * -1
    })

    // deposit
    await StatementStore.add({ 
        accountId: props.targetAccount.id,
        description: `Transfer from account ${props.sourceAccount.name}`,
        value: equivalentValue 
    })
}

export const TraderService = {
    trade
}