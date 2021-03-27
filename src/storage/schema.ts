import { DBSchema } from "idb";

export interface DindinDbSchema extends DBSchema {
    accounts: {
      key: string;
      value: {
        name: string
      }
    };
    statements: {
      value: {
        description: string;
        value: number;
        createdAt: string;
      };
      key: string;
      indexes: { 'by-account': number };
    };
  }