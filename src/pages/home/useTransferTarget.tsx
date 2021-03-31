import * as React from 'react'

export interface UseTransferTargetProps { }

export function useTransferTarget(props:UseTransferTargetProps) {
    const [sourceAccountId, setSourceAccountId] = React.useState<number>();

    // ---------------------------------------------
    // Functions

    const isTarget = React.useCallback((accountId: number) => {
        return !!(sourceAccountId && accountId !== sourceAccountId)
    }, [sourceAccountId]) 

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        sourceAccountId, 
        setSourceAccountId,
        isTarget
    }
}