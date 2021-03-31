export interface DtoBritasResponse {
    "@odata.context": string
    value: {
        cotacaoCompra: number,
        cotacaoVenda: number,
        dataHoraCotacao: string
    }[]
}