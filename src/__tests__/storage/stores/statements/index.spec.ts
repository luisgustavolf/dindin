import { Account } from "../../../../storage/stores/accounts/account"
import { resetDb } from "../../../../storage/db"
import { AccountStore } from "../../../../storage/stores/accounts";
import { StatementStore } from "../../../../storage/stores/statements";
import { EnumCurrency } from "../../../../storage/stores/accounts/enumCurrency";

let account: Account;

beforeEach(async () => {
    await resetDb()
    account = await AccountStore.save({ name: 'reais', currency: EnumCurrency.BRL })
})

describe('Statement service', () => {
    describe('validations', () => {
        it('can save', async () => {
            const data = { accountId: account.id, description: 'desc', value: 12 }
            const promise = StatementStore.save(data)
            await expect(promise).resolves.toEqual({ id: 1, ...data })
        })

        it('must be related to an account', async () => {
            const promise = StatementStore.save({ description: 'desc', value: 12 })
            await expect(promise).rejects.toThrowError()
        })

        it('must have a description', async () => {
            const promise = StatementStore.save({ accountId: account.id, value: 12 })
            await expect(promise).rejects.toThrowError()
        })

        it('must have a value', async () => {
            const promise = StatementStore.save({ accountId: account.id, description: 'desc' })
            await expect(promise).rejects.toThrowError()
        })
    })
})