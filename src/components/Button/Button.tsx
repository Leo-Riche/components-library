import React from 'react';

export interface ButtonProps {
    /** Le texte affiché sur le bouton */
    children: React.ReactNode;
    /** Le type de bouton (primary, secondary) */
    variant?: 'primary' | 'secondary';
    /** La taille du bouton */
    size?: 'small' | 'medium' | 'large';
    /** Si le bouton est désactivé */
    disabled?: boolean;
    /** Fonction appelée lors du clic */
    onClick?: () => void;
    /** Classe CSS personnalisée */
    className?: string;
}

/**
 * Composant Button réutilisable avec Tailwind CSS
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    className = '',
}) => {
    // Classes de base
    const baseClasses = 'inline-flex items-center justify-center border border-transparent font-medium rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Classes selon la variante
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    };

    // Classes selon la taille
    const sizeClasses = {
        small: 'px-4 py-2 text-sm min-h-[36px]',
        medium: 'px-6 py-3 text-base min-h-[44px]',
        large: 'px-8 py-4 text-lg min-h-[52px]',
    };

    // Classes pour l'état désactivé
    const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

    const finalClasses = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
    ].join(' ');

    return (
        <button
            className={finalClasses}
            onClick={onClick}
            disabled={disabled}
            type="button"
        >
            {children}
        </button>
    );
};
