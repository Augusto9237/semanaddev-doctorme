import { HTMLProps, forwardRef } from 'react'
export interface InputProps extends HTMLProps<HTMLInputElement> { }

const input = forwardRef<HTMLInputElement, InputProps>(({
    type, ...props
}, ref) => {
    return (
        <input
            className='border border-gray-200 p-[15px] rounded-xl'
            ref={ref}
            type={type}
            {...props}
        />
    )
});

input.displayName = 'Input';
export default input;