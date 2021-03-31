import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
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
    const { accounts } = useTransferDialog({ 
        targetAccountId,
        sourceAccountId
    })
    
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Dialog
            open={open}
        >
            <DialogTitle>
                Transferir {accounts.sourceAccount?.name} para {accounts.targetAccount?.name}
            </DialogTitle>
            <DialogContent>
                
               

            </DialogContent>
            <DialogActions >
                <Button onClick={props.onOk} color="primary">
                    Transferir
                </Button>
                <Button onClick={props.onCancel}>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}