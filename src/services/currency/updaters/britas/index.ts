import axios from "axios";
import { DtoBritasResponse } from "./dtoBritasResponse";

export async function getBritasValue() {
    const url = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
    const values = await axios.get<DtoBritasResponse>(url)
    return parseFloat(values.data.ticker.buy)
}