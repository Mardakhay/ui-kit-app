import React, { forwardRef } from "react";
import './Input.css';

export type InputVariant = 'outlined' | 'filled' | 'standard';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string,
    helperText?: string;
    variant?: InputVariant;
    leftIcon?: React.ReactNode;
    fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            variant = 'outlined',
            leftIcon,
            fullWidth = false,
            className = '',
            id,
            ...rest
        }, 
        ref
    ) => {
        const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`: undefined);

        return (
            <div 
                className={`input-wrapper ${fullWidth} ? 'input--full': ''} ${error ? 'input--error' : ''} 
                ${className}`}    
            >
                {label && (
                    <label htmlFor={inputId} className="input__label"> 
                        {label}
                    </label>
                )}
                <div className={`input__field input--${variant}`}>
                    {leftIcon && <span className="input__icon">{leftIcon}</span>}
                    <input id={inputId} ref={ref} {...rest}/>
                </div>
                {(error || helperText) && (
                    <span className={`input__helper ${error ? 'input__helper--error' : ''}`}>
                        {error || helperText}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'input';

export default Input;