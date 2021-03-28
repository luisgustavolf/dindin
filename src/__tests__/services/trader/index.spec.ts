import { TraderService } from "../../../services/trader";
import { resetDb } from "../../../storage/db";
import { AccountStore } from "../../../storage/stores/accounts";
import { Account } from "../../../storage/stores/accounts/account"
import { EnumCurrency } from "../../../storage/stores/accounts/enumCurrency";

let sourceAccount: Account;
let targetAccount: Account;

beforeEach(async () => {
    await resetDb()
    sourceAccount = await AccountStore.save({ name: 'reais', currency: EnumCurrency.BRL })
    targetAccount = await AccountStore.save({ name: 'bitcoins', currency: EnumCurrency.BTC })
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