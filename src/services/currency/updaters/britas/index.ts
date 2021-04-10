import axios from "axios";
import { DtoBritasResponse } from "./dtoBritasResponse";

const DEFAULT_VALUE = 5

export async function getBritasValue() {
    const today = new Date();
    const formattedDate = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${formattedDate}'&$top=100&$format=json`
    const values = await axios.get<DtoBritasResponse>(url)
    const exchangeValue = values.data.value[0]?.cotacaoCompra 
    
    if (exchangeValue) {
        return exchangeValue
    } else  {
        console.warn(`Enable to get current Britas value. Assuming default value of ${DEFAULT_VALUE}...`)
        return DEFAULT_VALUE
    }

}