import React from 'react';

/**
 * GradientHeader component with primary gradient background
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Header content
 * @param {string} [props.size='md'] - Header size: 'sm', 'md', 'lg', 'xl'
 * @param {string} [props.align='center'] - Text alignment: 'left', 'center', 'right'
 * @param {string} [props.className] - Additional CSS classes
 */
export const GradientHeader = ({
  children,
  size = 'md',
  align = 'center',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div
      className={`w-full bg-gradient-primary ${sizes[size]} ${aligns[align]} ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default GradientHeader;
