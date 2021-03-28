import { EnumCurrency } from "./enumCurrency";

export interface Account {
    id?: number,
    currency: EnumCurrency,
    name: string
}