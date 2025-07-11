import React from 'react';

export interface IconButtonProps {
  icon: string;
  ariaLabel: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}


export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center border border-transparent font-medium rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 aspect-square';


  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',

  };

  const sizeClasses = {
    small: 'w-8 h-8 text-base',
    medium: 'w-10 h-10 text-xl',
    large: 'w-12 h-12 text-2xl',
  };

  const disabledClasses = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'cursor-pointer hover:scale-105';


  const finalClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className,

  ].join(' ');

  return (
    <button
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
      aria-label={ariaLabel}
    >
      <span className="flex items-center justify-center leading-none">
        {icon}
      </span>
    </button>
  );
};
