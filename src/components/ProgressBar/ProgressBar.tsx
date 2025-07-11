import React from 'react';

export interface ProgressBarProps {
    /** La valeur actuelle du progrès (0-100) */
    value: number;
    /** La valeur maximale (par défaut 100) */
    max?: number;
    /** La variante de couleur */
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    /** La taille de la barre de progression */
    size?: 'small' | 'medium' | 'large';
    /** Afficher le pourcentage */
    showPercentage?: boolean;
    /** Afficher l'étiquette */
    label?: string;
    /** Animation de la barre */
    animated?: boolean;
    /** Classe CSS personnalisée */
    className?: string;
}

/**
 * Composant ProgressBar réutilisable avec Tailwind CSS
 */
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
    // Calculer le pourcentage
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    // Classes de base pour le conteneur
    const containerClasses = 'w-full bg-gray-200 rounded-full overflow-hidden';

    // Classes selon la taille
    const sizeClasses = {
        small: 'h-2',
        medium: 'h-4',
        large: 'h-6',
    };

    // Classes selon la variante pour la barre de progression
    const variantClasses = {
        default: 'bg-gray-500',
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        warning: 'bg-yellow-500',
        danger: 'bg-red-600',
    };

    // Classes pour l'animation
    const animationClasses = animated
        ? 'transition-all duration-300 ease-out'
        : 'transition-all duration-200 ease-out';

    // Classes pour l'animation striée (optionnelle)
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
            {/* Étiquette et pourcentage */}
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

            {/* Barre de progression */}
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
                    {/* Pourcentage affiché dans la barre (pour les barres larges) */}
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
