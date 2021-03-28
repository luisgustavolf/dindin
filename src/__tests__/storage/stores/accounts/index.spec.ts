import { Account } from "../../../../storage/stores/accounts/account"
import { resetDb } from "../../../../storage/db"
import { EnumCurrency } from "../../../../storage/stores/accounts/enumCurrency"
import { AccountStore } from "../../../../storage/stores/accounts"

beforeEach(async () => {
    await resetDb()
})

describe('Account service', () => {
    describe('validations', () => {
        it ('must have a name', async () => {
            const promise = AccountStore.save({ currency: EnumCurrency.BRL })
            await expect(promise).rejects.toThrowError()
        })

        it ('must have a slug', async () => {
            const promise = AccountStore.save({ name: 'Reais' })
            await expect(promise).rejects.toThrowError()
        })
    })
    
    it ('can add accounts', async () => {
        const data: Account = { name: 'Reais', currency: EnumCurrency.BRL }
        const promise = AccountStore.save(data)
        await expect(promise).resolves.toEqual({ id: 1, ...data })
    })

    it ('can list accounts', async () => {
        await AccountStore.save({ name: 'Reais', currency: EnumCurrency.BRL })
        await AccountStore.save({ name: 'Bitcoins', currency: EnumCurrency.BTC})
        const accounts = await AccountStore.getAll()
        expect(accounts).toHaveLength(2)
    })    
})