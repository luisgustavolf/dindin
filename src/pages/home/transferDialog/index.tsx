import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import * as React from 'react'
import { useTransferDialog } from './hook'

export interface TransferDialogProps {
    sourceAccountId: number
    targetAccountId: number
    open: boolean
    onOk: () => void
    onCancel: () => void
}

export function TransferDialog(props: TransferDialogProps) {
    const { open, sourceAccountId, targetAccountId } = props
    const { accounts, form } = useTransferDialog({ 
        targetAccountId,
        sourceAccountId,
        onTransfer: props.onOk
    })
    
    // ---------------------------------------------
    // Transformations

    const sourceBalance = accounts.sourceAccount?.balance && accounts.sourceAccount?.balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    // ---------------------------------------------
    // Render

    return (
        <Dialog
            open={open}
        >
            <DialogTitle>
                Transferência
            </DialogTitle>
            <DialogContent className={'dd-transfer-dialog-content'}>
                <Typography variant="caption">De</Typography>
                <Typography variant="h4">{accounts.sourceAccount?.name}</Typography>

                <Typography variant="caption">Para</Typography>
                <Typography variant="h4">{accounts.targetAccount?.name}</Typography>
               
                <Typography variant="caption">Saldo em conta</Typography>
                <Typography variant="h4">{sourceBalance} {accounts.sourceAccount?.currency}</Typography>

                <TextField
                    style={{marginTop: 20}}
                    label="Valor à transferir"
                    value={form.values.amount}
                    onChange={(evt) => {form.setValues({ amount: parseFloat(evt.target.value) })}}
                    variant="outlined"
                    error={!!form.errors?.amount}
                    helperText={form.errors?.amount}
                    fullWidth
                />

            </DialogContent>
            <DialogActions >
                <Button onClick={form.validate} color="primary">
                    Transferir
                </Button>
                <Button onClick={props.onCancel}>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}