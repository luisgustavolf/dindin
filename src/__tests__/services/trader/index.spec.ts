import { TraderService } from "../../../services/trader";
import { resetDb } from "../../../storage/db";
import { AccountStore } from "../../../storage/stores/accounts";
import { Account } from "../../../storage/stores/accounts/account"

let sourceAccount: Account;
let targetAccount: Account;

beforeEach(async () => {
    await resetDb()
    sourceAccount = await AccountStore.save({ name: 'reais', currency: 'reais' })
    targetAccount = await AccountStore.save({ name: 'bitcoins', currency: 'bitcoins' })
})

describe('Account service', () => {
    describe('validations', () => {
        it('Can trade between accounts', () => { 
            TraderService.trade({
                sourceAccount,
                targetAccount,
                value: 150,
            })
        })
    })
})