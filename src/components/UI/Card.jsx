import React from 'react';

/**
 * Modern Card component with flexible layout
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {React.ReactNode} [props.header] - Card header content
 * @param {React.ReactNode} [props.footer] - Card footer content
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.hover=true] - Enable hover effects
 * @param {string} [props.variant='default'] - Card style: 'default', 'gradient', 'ghost'
 */
export const Card = ({
  children,
  header,
  footer,
  className = '',
  hover = true,
  variant = 'default',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'bg-white border border-neutral-200/60 shadow-soft-md',
    gradient: 'bg-gradient-primary text-white shadow-premium',
    glass: 'glass-card border-white/20',
    ghost: 'bg-transparent border-2 border-primary-200/50',
  };

  const hoverStyles = hover ? 'hover:shadow-premium hover:-translate-y-2' : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {header && (
        <div className="px-6 py-4 border-b border-gray-100">
          {header}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-xl">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
