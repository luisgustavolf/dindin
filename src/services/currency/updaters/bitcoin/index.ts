import axios from "axios";
import { DtoBitcoinResponse } from "./dtoBitcoinResponse";

export async function getBitcoinValue() {
    const url = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
    const values = await axios.get<DtoBitcoinResponse>(url)
    return parseFloat(values.data.ticker.buy)
}