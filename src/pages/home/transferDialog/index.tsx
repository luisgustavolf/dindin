import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import * as React from 'react'
import { AccountWithBalance } from '../../../services/account/types'
import { useTransferDialog } from './hook'

export interface TransferDialogProps {
    sourceAccount?: AccountWithBalance
    targetAccount?: AccountWithBalance
    open: boolean
    onOk: () => void
    onCancel: () => void
}

export function TransferDialog(props: TransferDialogProps) {
    const { open, sourceAccount, targetAccount } = props
    const { form } = useTransferDialog({ 
        open,
        targetAccount,
        sourceAccount,
        onTransfer: props.onOk
    })
    
    // ---------------------------------------------
    // Transformations

    const sourceBalance = sourceAccount?.balance && 
        sourceAccount?.balance.toLocaleString(undefined, {
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
                <Typography variant="h4">{sourceAccount?.name}</Typography>

                <Typography variant="caption">Para</Typography>
                <Typography variant="h4">{targetAccount?.name}</Typography>
               
                <Typography variant="caption">Saldo em conta</Typography>
                <Typography variant="h4">{sourceBalance} {sourceAccount?.currency}</Typography>

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