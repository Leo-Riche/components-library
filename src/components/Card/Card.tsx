import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    shadow?: 'none' | 'small' | 'medium' | 'large';
    clickable?: boolean;
    onClick?: () => void;
    className?: string;
    title?: string;
    subtitle?: string;
}


export const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    size = 'medium',
    shadow = 'medium',
    clickable = false,
    onClick,
    className = '',
    title,
    subtitle,
}) => {
    const baseClasses = 'rounded-lg border transition-all duration-200 ease-in-out';

    const variantClasses = {
        default: 'bg-white border-gray-200 text-gray-900',
        primary: 'bg-blue-50 border-blue-200 text-blue-900',
        secondary: 'bg-gray-50 border-gray-300 text-gray-900',
        success: 'bg-green-50 border-green-200 text-green-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        danger: 'bg-red-50 border-red-200 text-red-900',
    };

    const sizeClasses = {
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8',
    };

    const shadowClasses = {
        none: '',
        small: 'shadow-sm',
        medium: 'shadow-md',
        large: 'shadow-lg',
    };

    const interactiveClasses = clickable
        ? 'cursor-pointer hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        : '';

    const finalClasses = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        shadowClasses[shadow],
        interactiveClasses,
        className,
    ].join(' ');

    const CardContent = (
        <>
            {(title || subtitle) && (
                <div className="mb-4">
                    {title && (
                        <h3 className="text-lg font-semibold mb-1">
                            {title}
                        </h3>
                    )}
                    {subtitle && (
                        <p className="text-sm opacity-75">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {children}
        </>
    );

    if (clickable) {
        return (
            <div
                className={finalClasses}
                onClick={onClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                        e.preventDefault();
                        onClick();
                    }
                }}
            >
                {CardContent}
            </div>
        );
    }

    return (
        <div className={finalClasses}>
            {CardContent}
        </div>
    );
};
