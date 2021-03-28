import { DBSchema } from "idb";
import { Statement } from "./stores/statements/statement";
import { Account } from "./stores/accounts/account";

export interface DindinDbSchema extends DBSchema {
    accounts: {
        key: number;
        value: Account
    };
    statements: {
        value: Statement
        key: number;
        indexes: { 'by-account': number };
    };
}