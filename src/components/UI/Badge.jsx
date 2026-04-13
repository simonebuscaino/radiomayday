import React from 'react';

/**
 * Badge component for labels and tags
 * @component
 * @param {Object} props
 * @param {string} [props.variant='primary'] - Badge color: 'primary', 'secondary', 'success', 'warning', 'error', 'info'
 * @param {string} [props.size='md'] - Badge size: 'sm', 'md', 'lg'
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} [props.className] - Additional CSS classes
 */
export const Badge = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center gap-1 rounded-full font-semibold transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary: 'bg-primary-50 text-primary-600 border border-primary-100',
    secondary: 'bg-secondary-50 text-secondary-700 border border-secondary-100',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    warning: 'bg-amber-50 text-amber-700 border border-amber-100',
    error: 'bg-rose-50 text-rose-700 border border-rose-100',
    info: 'bg-blue-50 text-blue-700 border border-blue-100',
    premium: 'bg-gradient-primary text-white shadow-soft-sm',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
