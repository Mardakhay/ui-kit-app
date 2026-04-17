import React from "react";
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?:React.ReactNode;
}

function Button ({
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    disabled,
    ...rest
}: ButtonProps) {
    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth ? 'btn--full' : '',
        loading ? 'btn--loading' : '',
        className,
    ].filter(Boolean).join('');

    return (
        <button className={classes} disabled={disabled || loading} {...rest}>
            {loading && <span className="btn__spinner"/>}
            {leftIcon && <span className="btn__icon">{leftIcon}</span>}
            <span className="btn__text">{children}</span>
            {rightIcon && <span className="btn__icon">{rightIcon}</span>}
        </button>
    );
}

export default Button; 