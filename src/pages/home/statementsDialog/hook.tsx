import * as React from 'react'
import { AccountService } from '../../../services/account'
import { Account } from '../../../storage/stores/accounts/account'
import { Statement } from '../../../storage/stores/statements/statement'

export interface UseStatementDialogProps {
    account: Account
    open: boolean
}

export function useStatementDialog(props: UseStatementDialogProps) {
    const { account, open } = props
    const [loading, setLoading] = React.useState(false)
    const [statements, setStatements] = React.useState<Statement[]>()

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects

    React.useEffect(() => {
        (async () => {
            if (open) {
                setLoading(true)
                setStatements(await AccountService.getAccountsStatements(account.id!))
                setLoading(false)
            }
        })()
    }, [open, account])

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API

    return {
        loading,
        statements
    }
}