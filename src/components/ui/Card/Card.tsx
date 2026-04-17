import React from "react";
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps {
    variant?: CardVariant;
    padding?: CardPadding;
    hoverable?:  boolean;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface SubComponentProps {
    children: React.ReactNode;
    className?: string;
}

function Card ({
    variant = 'elevated',
    padding = 'md',
    hoverable = false,
    children,
    className = '',
    onClick, 
}: CardProps) {
    const classes = [
        'card',
        `card--${variant}`,
        `card--pad-${padding}`,
        hoverable ? 'card--hoverable' : '',
        onClick ? 'card--clickable' : '', 
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
}

Card.Header = function  CardHeader({children, className = ''}: SubComponentProps) {
    return <div className={`card__header ${className}`}>{children}</div>;   
};

Card.Body = function CardBody ({children, className = ''}: SubComponentProps){
    return <div className={`card__body ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter ({children, className = ''}: SubComponentProps) {
    return <div className={`card__footer ${className}`}>{children}</div>;
};

export default Card;