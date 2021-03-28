import { AccountService } from "../../../services/account"
import { resetDb } from "../../../storage/db"

beforeEach(async () => {
    await resetDb()
})

describe('Account service', () => {
    describe('validations', () => {
        it ('must have a name', async () => {
            const promise = AccountService.add({ slug: 'reais' })
            await expect(promise).rejects.toThrowError()
        })

        it ('must have a slug', async () => {
            const promise = AccountService.add({ name: 'Reais' })
            await expect(promise).rejects.toThrowError()
        })
    })
    
    it ('can add accounts', async () => {
        const data = { name: 'Reais', slug: 'reais' }
        const promise = AccountService.add(data)
        await expect(promise).resolves.toEqual({ id: 1, ...data })
    })

    it ('can list accounts', async () => {
        await AccountService.add({ name: 'Reais', slug: 'reais' })
        await AccountService.add({ name: 'Bitcoins', slug: 'bitcoins'})
        const accounts = await AccountService.getAll()
        expect(accounts).toHaveLength(2)
    })    
})