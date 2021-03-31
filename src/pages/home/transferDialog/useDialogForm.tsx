import * as React from 'react'
import { DialogFormErrors, DialogFormValues } from './types'

export interface UseDialogFormProps {
    onSubmit: (values: DialogFormValues) => void
}

export function useDialogForm(props:UseDialogFormProps) {
    const onSubmitRef = React.useRef(props.onSubmit)
    onSubmitRef.current = props.onSubmit
    
    const [values, setValues] = React.useState<DialogFormValues>({ amount: 0 })
    const [errors, setErrors] = React.useState<DialogFormErrors>()
    
    // ---------------------------------------------
    // Functions

    const validate = React.useCallback(() => {
        setErrors(undefined)
        if (!values.amount)
            setErrors({ amount: 'Valor é obrigatorio...'})
        else 
            onSubmitRef.current(values)
    }, [values])

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        values, 
        errors,
        setValues,
        validate
    }
}