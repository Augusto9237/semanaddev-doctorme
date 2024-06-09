import { HTMLAttributes, forwardRef } from 'react'
export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const label = forwardRef<HTMLLabelElement, LabelProps>(({
    children, ...props
}, ref) => {
    return (
        <label ref={ref}  {...props}>{children}</label>
    )
});

label.displayName = 'Label';
export default label;
