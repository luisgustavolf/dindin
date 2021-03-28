import { AccountService } from "../../../services/account";
import { resetDb } from "../../../storage/db";
import { AccountStore } from "../../../storage/stores/accounts";
import { Account } from "../../../storage/stores/accounts/account";
import { EnumCurrency } from "../../../storage/stores/accounts/enumCurrency";

let sourceAccount: Account;
let targetAccount: Account;

beforeEach(async () => {
    await resetDb();
    sourceAccount = await AccountStore.add({ name: 'reais', currency: EnumCurrency.BRL })
    targetAccount = await AccountStore.add({ name: 'bitcoins', currency: EnumCurrency.BTC })
})

describe('Account service', () => {
    it('Can list accounts', async () => {
        const accounts = await AccountService.getAll()
        expect(accounts).toHaveLength(2)
    })

    it('Can get an account', async () => {
        const account = await AccountService.get(sourceAccount.id!)
        expect(account).toEqual(sourceAccount)
    })

    it('Can get an account balance', async () => {
        const balance = await AccountService.getAccountBalance(sourceAccount.id!)
        expect(balance).toBe(0)
    })

    it('Can get an account statements', async () => {
        const statements = await AccountService.getAccountsStatements(sourceAccount.id!)
        expect(statements).toEqual([])
    })
})