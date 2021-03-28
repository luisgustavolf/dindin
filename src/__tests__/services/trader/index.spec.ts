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
    sourceAccount = await AccountStore.add({ name: 'reais', currency: EnumCurrency.BRL })
    targetAccount = await AccountStore.add({ name: 'bitcoins', currency: EnumCurrency.BTC })
    await StatementStore.add({
        accountId: sourceAccount.id,
        description: 'initial deposit',
        value: 1000
    })
})

async function expectedAccountsBalances(source: number, target: number) {
    const sourceBalance = await StatementStore.getAccountsBalance(sourceAccount.id!)
    const targetBalance = await StatementStore.getAccountsBalance(targetAccount.id!)
    expect(sourceBalance).toBe(source)
    expect(targetBalance).toBe(target)
}

describe('Trader service', () => {
    it('Can trade between accounts', async () => {
        await TraderService.trade({
            sourceAccount,
            targetAccount,
            value: 100,
        })

        await expectedAccountsBalances(900, 0.01)
    })

    it('Cannot trade beyond funds', async () => {
        const promise = TraderService.trade({
            sourceAccount,
            targetAccount,
            value: 100000,
        })

        await expect(promise).rejects.toThrowError()
        await expectedAccountsBalances(1000, 0)
    })
})