import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import * as React from 'react'

export interface AccountTransferModalProps {
    sourceAccountId: number
}

export function AccountTransferModal(props:AccountTransferModalProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Dialog open={true} >
            <DialogTitle id="simple-dialog-title">Transferir</DialogTitle>
            <DialogContent>
                Content
            </DialogContent>
            <DialogActions>
                <Button color="primary">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}