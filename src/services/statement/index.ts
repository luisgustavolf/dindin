import { StatementStore } from "../../storage/stores/statements"
import { Statement } from '../../storage/stores/statements/statement'

async function add(account: Partial<Statement>) {
    return await StatementStore.save(account)
}

async function getAll() {
    return await StatementStore.getAll()
}

export const StatementService = {
    add,
    getAll
}