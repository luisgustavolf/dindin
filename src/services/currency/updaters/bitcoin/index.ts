import axios from "axios";
import { DtoBitcoinResponse } from "./dtoBitcoinResponse";

const DEFAULT_VALUE = 30000

export async function getBitcoinValue() {
    const url = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
    const values = await axios.get<DtoBitcoinResponse>(url)
    
    const exchangeValue = values.data.ticker?.buy
    
    if (exchangeValue) {
        return parseFloat(exchangeValue)
    } else  {
        console.warn(`Enable to get current Bitcoin value. Assuming default value of ${DEFAULT_VALUE}...`)
        return DEFAULT_VALUE
    }
}