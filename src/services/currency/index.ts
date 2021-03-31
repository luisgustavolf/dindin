import { EnumCurrency } from "../../storage/stores/accounts/enumCurrency";
import { currencyExchangeIndexes } from "./currencyExchangeIndexes";
import { getBitcoinValue } from "./updaters/bitcoin";
import { getBritasValue } from "./updaters/britas";

async function updateCurrencyExchangeIndexes() {
    const BRI = await getBritasValue();
        
    currencyExchangeIndexes[EnumCurrency.BRL] = 1
    currencyExchangeIndexes[EnumCurrency.USD] = BRI
    currencyExchangeIndexes[EnumCurrency.BRI] = BRI
    currencyExchangeIndexes[EnumCurrency.BTC] = await getBitcoinValue()
}

function calculateEquivalentValue(props: { sourceCurrency: EnumCurrency, targetCurrency: EnumCurrency, value: number }) {
    return props.value * currencyExchangeIndexes[props.sourceCurrency] / currencyExchangeIndexes[props.targetCurrency];
}

export const CurrencyService = {
    updateCurrencyExchangeIndexes,
    calculateEquivalentValue
}