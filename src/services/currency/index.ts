import { EnumCurrency } from "../../storage/stores/accounts/enumCurrency";
import { currencyExchangeIndexes } from "./currencyExchangeIndexes";

async function updateCurrencyExchangeIndexes() {

}

function calculateEquivalentValue(props: {
    sourceCurrency: EnumCurrency,
    targetCurrency: EnumCurrency,
    value: number
}) {
    return props.value * currencyExchangeIndexes[props.sourceCurrency] / currencyExchangeIndexes[props.targetCurrency];
}

export const CurrencyService = {
    updateCurrencyExchangeIndexes,
    calculateEquivalentValue
}