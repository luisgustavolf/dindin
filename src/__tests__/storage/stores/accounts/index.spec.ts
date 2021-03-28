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
            const promise = AccountStore.add({ currency: EnumCurrency.BRL })
            await expect(promise).rejects.toThrowError()
        })

        it ('must have a slug', async () => {
            const promise = AccountStore.add({ name: 'Reais' })
            await expect(promise).rejects.toThrowError()
        })
    })
    
    it ('can add accounts', async () => {
        const data: Account = { name: 'Reais', currency: EnumCurrency.BRL }
        const promise = AccountStore.add(data)
        await expect(promise).resolves.toEqual({ id: 1, ...data })
    })

    it ('can list accounts', async () => {
        await AccountStore.add({ name: 'Reais', currency: EnumCurrency.BRL })
        await AccountStore.add({ name: 'Bitcoins', currency: EnumCurrency.BTC})
        const accounts = await AccountStore.getAll()
        expect(accounts).toHaveLength(2)
    })    
})