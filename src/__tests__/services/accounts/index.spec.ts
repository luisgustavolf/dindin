import { AccountService } from "../../../services/account"
import { Account } from "../../../storage/stores/accounts/account"
import { resetDb } from "../../../storage/db"
import { EnumCurrency } from "../../../storage/stores/accounts/enumCurrency"

beforeEach(async () => {
    await resetDb()
})

describe('Account service', () => {
    describe('validations', () => {
        it ('must have a name', async () => {
            const promise = AccountService.add({ currency: 'reais' })
            await expect(promise).rejects.toThrowError()
        })

        it ('must have a slug', async () => {
            const promise = AccountService.add({ name: 'Reais' })
            await expect(promise).rejects.toThrowError()
        })
    })
    
    it ('can add accounts', async () => {
        const data: Account = { name: 'Reais', currency: EnumCurrency.BRL }
        const promise = AccountService.add(data)
        await expect(promise).resolves.toEqual({ id: 1, ...data })
    })

    it ('can list accounts', async () => {
        await AccountService.add({ name: 'Reais', currency: EnumCurrency.BRL })
        await AccountService.add({ name: 'Bitcoins', currency: EnumCurrency.BTC})
        const accounts = await AccountService.getAll()
        expect(accounts).toHaveLength(2)
    })    
})