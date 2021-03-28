import { TraderService } from "../../../services/trader";
import { resetDb } from "../../../storage/db";
import { AccountStore } from "../../../storage/stores/accounts";
import { Account } from "../../../storage/stores/accounts/account"
import { EnumCurrency } from "../../../storage/stores/accounts/enumCurrency";
import { StatementStore } from "../../../storage/stores/statements";

let sourceAccount: Account;
let targetAccount: Account;

beforeEach(async () => {
    await resetDb()
    sourceAccount = await AccountStore.save({ name: 'reais', currency: EnumCurrency.BRL })
    targetAccount = await AccountStore.save({ name: 'bitcoins', currency: EnumCurrency.BTC })
    await StatementStore.add({ 
        accountId: sourceAccount.id,
        description: 'initial deposit',
        value: 1000
    })
})

describe('Account service', () => {
    describe('validations', () => {
        it('Can trade between accounts', async () => { 
            await TraderService.trade({
                sourceAccount,
                targetAccount,
                value: 100,
            })

            const sourceBalance = await StatementStore.getAccountsBalance(sourceAccount.id!) 
            const targetBalance = await StatementStore.getAccountsBalance(targetAccount.id!) 
            expect(sourceBalance).toBe(900)
            expect(targetBalance).toBe(0.01)
        })

        it('Cannot trade beyond funds', async () => { 
            const promise = TraderService.trade({
                sourceAccount,
                targetAccount,
                value: 100000,
            })

            await expect(promise).rejects.toThrowError()

            const sourceBalance = await StatementStore.getAccountsBalance(sourceAccount.id!) 
            const targetBalance = await StatementStore.getAccountsBalance(targetAccount.id!) 
            expect(sourceBalance).toBe(1000)
            expect(targetBalance).toBe(0)
        })
    })
})