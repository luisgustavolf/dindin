import * as React from 'react'
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import { Account } from '../../../storage/stores/accounts/account'
import { useStatementDialog } from './hook'

export interface StatementsDialogProps {
    account: Account
    open: boolean
    onClose: () => void
}

export function StatementsDialog(props:StatementsDialogProps) {

    const { loading, statements } = useStatementDialog(props)

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Dialog
            open={true}
        >
            <DialogTitle>
                Statements
            </DialogTitle>
            <DialogContent>
                {loading && <CircularProgress />}
                {!loading && 
                    <table>
                        <tr>
                            <th>When</th>
                            <th>Description</th>
                            <th>Value</th>
                        </tr>
                        {statements?.map((statement, idx) => (
                            <tr key={idx}>
                                <td>{new Date(statement.createdAt).toLocaleDateString()}</td>
                                <td>{statement.description}</td>
                                <td>{statement.value}</td>
                            </tr>
                        ))}
                    </table>
                }
            </DialogContent>
            <DialogActions >
                <Button onClick={props.onClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}