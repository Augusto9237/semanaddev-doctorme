import React, { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        children, className, ...props
    }, ref) => {
    return (
        <button
            className={`bg-[#459487] text-white rounded-xl font-bold p-4 w-full ${className}`}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = 'Button';
export default Button;