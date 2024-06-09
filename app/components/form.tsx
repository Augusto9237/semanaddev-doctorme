import React, { InputHTMLAttributes, LabelHTMLAttributes, useId } from 'react'
import Label from './label';
import Input from './input';


export function Field({ labelProps, inputProps }: {
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}) {
    const fallbackId = useId();
    const id = inputProps.id ?? fallbackId;

    return (
        <div className='flex flex-col'>
            <Label htmlFor={id} {...labelProps} />
            <Input id={id} {...inputProps} />
        </div>
    )
}
