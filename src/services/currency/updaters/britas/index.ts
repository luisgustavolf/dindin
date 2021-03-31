import axios from "axios";
import { DtoBritasResponse } from "./dtoBritasResponse";

export async function getBritasValue() {
    const today = new Date();
    const formattedDate = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${formattedDate}'&$top=100&$format=json`
    const values = await axios.get<DtoBritasResponse>(url)
    return values.data.value[0].cotacaoCompra
}