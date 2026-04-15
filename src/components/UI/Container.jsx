import React from 'react';

/**
 * Responsive Container component for layout
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} [props.size='default'] - Container max width: 'sm', 'md', 'lg', 'xl', 'full'
 * @param {string} [props.padding='default'] - Padding level: 'none', 'sm', 'md', 'lg'
 * @param {string} [props.className] - Additional CSS classes
 */
export const Container = ({
  children,
  size = 'default',
  padding = 'default',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-4xl',
    full: 'max-w-full',
    default: 'max-w-6xl',
  };

  const paddings = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    default: 'px-4 md:px-6 lg:px-8',
  };

  return (
    <div
      className={`mx-auto ${sizes[size]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
