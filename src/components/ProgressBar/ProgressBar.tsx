import React from 'react';

export interface ProgressBarProps {
    value: number;
    max?: number;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    showPercentage?: boolean;
    label?: string;
    animated?: boolean;
    className?: string;
}


export const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    max = 100,
    variant = 'primary',
    size = 'medium',
    showPercentage = false,
    label,
    animated = false,
    className = '',
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const containerClasses = 'w-full bg-gray-200 rounded-full overflow-hidden';

    const sizeClasses = {
        small: 'h-2',
        medium: 'h-4',
        large: 'h-6',
    };

    const variantClasses = {
        default: 'bg-gray-500',
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        warning: 'bg-yellow-500',
        danger: 'bg-red-600',
    };

    const animationClasses = animated
        ? 'transition-all duration-300 ease-out'
        : 'transition-all duration-200 ease-out';

    const stripedClasses = animated
        ? 'bg-gradient-to-r from-transparent via-white to-transparent bg-[length:1rem_1rem] animate-pulse'
        : '';

    const containerFinalClasses = [
        containerClasses,
        sizeClasses[size],
        className,
    ].join(' ');

    const barClasses = [
        'h-full rounded-full flex items-center justify-end pr-2',
        variantClasses[variant],
        animationClasses,
        stripedClasses,
    ].join(' ');

    return (
        <div className="w-full">
            {(label || showPercentage) && (
                <div className="flex justify-between items-center mb-2">
                    {label && (
                        <span className="text-sm font-medium text-gray-700">
                            {label}
                        </span>
                    )}
                    {showPercentage && (
                        <span className="text-sm font-medium text-gray-700">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}

            <div className={containerFinalClasses}>
                <div
                    className={barClasses}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                    aria-label={label || `Progress: ${Math.round(percentage)}%`}
                >
                    {size === 'large' && showPercentage && (
                        <span className="text-xs font-medium text-white">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
