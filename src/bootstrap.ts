import { connect } from './storage/db';
import { AccountStore } from './storage/stores/accounts';
import { EnumCurrency } from './storage/stores/accounts/enumCurrency';
import { StatementStore } from './storage/stores/statements';
import { CurrencyService } from './services/currency'

export async function bootstrap(success: () => void) {
    await connect()
    await verifyIfApplicationNeedsInitialData()
    await CurrencyService.updateCurrencyExchangeIndexes()
    success();
}

async function verifyIfApplicationNeedsInitialData() {
    const accounts = await AccountStore.getAll();
    if (accounts.length === 0) {
        const reaisAccount = await AccountStore.add({ name: 'Reais', currency: EnumCurrency.BRL })
        await AccountStore.add({ name: 'Bitcoins', currency: EnumCurrency.BTC })
        await AccountStore.add({ name: 'Britas', currency: EnumCurrency.BRI })
        await StatementStore.add({ accountId: reaisAccount.id, description: 'Inital deposit', value: 100000})
    }
}