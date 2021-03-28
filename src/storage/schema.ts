import { DBSchema } from "idb";

export interface DindinDbSchema extends DBSchema {
    accounts: {
        key: number;
        value: {
            name: string
        }
    };
    statements: {
        value: {
            description: string;
            value: number;
            accountId: number;
            createdAt: string;
        };
        key: number;
        indexes: { 'by-account': number };
    };
}