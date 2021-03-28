import { StatementService } from "../../../services/statement"
import { Account } from "../../../storage/stores/accounts/account"
import { resetDb } from "../../../storage/db"
import { AccountStore } from "../../../storage/stores/accounts";

let account: Account;

beforeEach(async () => {
    await resetDb()
    account = await AccountStore.save({ name: 'reais', slug: 'reais' })
})

describe('Statement service', () => {
    describe('validations', () => {
        it('can save', async () => {
            const data = { accountId: account.id, description: 'desc', value: 12 }
            const promise = StatementService.add(data)
            await expect(promise).resolves.toEqual({ id: 1, ...data })
        })

        it('must be related to an account', async () => {
            const promise = StatementService.add({ description: 'desc', value: 12 })
            await expect(promise).rejects.toThrowError()
        })

        it('must have a description', async () => {
            const promise = StatementService.add({ accountId: account.id, value: 12 })
            await expect(promise).rejects.toThrowError()
        })

        it('must have a value', async () => {
            const promise = StatementService.add({ accountId: account.id, description: 'desc' })
            await expect(promise).rejects.toThrowError()
        })
    })
})