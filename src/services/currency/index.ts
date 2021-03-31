import { EnumCurrency } from "../../storage/stores/accounts/enumCurrency";
import { currencyExchangeIndexes } from "./currencyExchangeIndexes";
import { getBitcoinValue } from "./updaters/bitcoin";
import { getBritasValue } from "./updaters/britas";

async function updateCurrencyExchangeIndexes() {
    currencyExchangeIndexes[EnumCurrency.BTC] = await getBitcoinValue()
    currencyExchangeIndexes[EnumCurrency.BRL] = 1 / (await getBritasValue())
}

function calculateEquivalentValue(props: { sourceCurrency: EnumCurrency, targetCurrency: EnumCurrency, value: number }) {
    return props.value * currencyExchangeIndexes[props.sourceCurrency] / currencyExchangeIndexes[props.targetCurrency];
}

export const CurrencyService = {
    updateCurrencyExchangeIndexes,
    calculateEquivalentValue
}