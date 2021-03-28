import { CurrencyService } from "../../../services/currency"
import { currencyExchangeIndexes } from "../../../services/currency/currencyExchangeIndexes"
import { EnumCurrency } from "../../../storage/stores/accounts/enumCurrency"

beforeEach(() => {
    currencyExchangeIndexes.USD = 1
    currencyExchangeIndexes.BRI = 1
    currencyExchangeIndexes.BTC = 1000
    currencyExchangeIndexes.BRL = 0.1
})

describe('Account service', () => {
    describe('validations', () => {
        it('Can trade a currency for another', () => { 
            const baseValue = 100;
            
            const value = CurrencyService.calculateEquivalentValue({ 
                sourceCurrency: EnumCurrency.USD,
                targetCurrency: EnumCurrency.BRL,
                value: baseValue
            })

            expect(value).toBe(1000)

            const value2 = CurrencyService.calculateEquivalentValue({ 
                sourceCurrency: EnumCurrency.BRL,
                targetCurrency: EnumCurrency.BTC,
                value: baseValue
            })

            expect(value2).toBe(0.01)
        })
    })
})