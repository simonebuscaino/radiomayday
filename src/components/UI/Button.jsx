import React from 'react';

/**
 * Modern Button component with multiple variants and sizes
 * @component
 * @param {Object} props
 * @param {string} [props.variant='primary'] - Button style variant: 'primary', 'secondary', 'outline', 'ghost', 'danger'
 * @param {string} [props.size='md'] - Button size: 'sm', 'md', 'lg'
 * @param {boolean} [props.disabled=false] - Disable button
 * @param {boolean} [props.loading=false] - Show loading state
 * @param {boolean} [props.fullWidth=false] - Full width button
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type='button'] - Button type
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95';

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-soft-md hover:shadow-lg focus-visible:outline-primary-500',
    secondary: 'bg-secondary-500 text-neutral-900 hover:bg-secondary-600 shadow-soft-md hover:shadow-lg focus-visible:outline-secondary-500',
    premium: 'bg-gradient-primary text-white shadow-soft-md hover:shadow-lg hover:brightness-110 focus-visible:outline-primary-500',
    outline: 'border-2 border-neutral-200 text-neutral-800 hover:border-primary-500 hover:text-primary-600 focus-visible:outline-primary-500 bg-white/50 backdrop-blur-sm',
    ghost: 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-neutral-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-soft-md focus-visible:outline-red-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
