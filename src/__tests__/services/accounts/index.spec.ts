import { AccountService } from "../../../services/account"
import { connect, connection } from "../../../storage/db"

beforeAll(async () => {
    await connect()
})

describe('Account service', () => {
    it ('can connect', async () => {
        await AccountService.add({ name: 'Reais', slug: 'reais' })
        await AccountService.add({ name: 'Bitcoins', slug: 'bitcoins'})
        const accounts = await AccountService.getAll()
        expect(accounts).toHaveLength(2)
    })    
})