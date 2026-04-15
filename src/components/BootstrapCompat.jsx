import React from 'react';

/**
 * Tailwind-based replacement for Bootstrap Container
 */
export const Container = ({ fluid = false, children, className = '', ...props }) => {
  const baseClass = fluid ? 'w-full px-4' : 'mx-auto max-w-6xl px-4 md:px-6 lg:px-8';
  return (
    <div className={`${baseClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * Tailwind-based replacement for Bootstrap Row
 */
export const Row = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex flex-wrap ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * Tailwind-based replacement for Bootstrap Col
 * Accepts Bootstrap-style props: md="3", sm="6", etc.
 */
export const Col = ({ md, sm, lg, xs, children, className = '', ...props }) => {
  const getColClass = (size, breakpoint) => {
    if (!size) return '';
    const gridSize = 12;
    const colSize = (parseInt(size) / gridSize) * 100;
    
    const breakpointPrefix = {
      xs: '',
      sm: 'sm:',
      md: 'md:',
      lg: 'lg:',
    };
    
    return `${breakpointPrefix[breakpoint] || ''}w-${Math.round(colSize / 100 * 12)}/12`;
  };

  const colClasses = [
    getColClass(xs, 'xs'),
    getColClass(sm, 'sm'),
    getColClass(md, 'md'),
    getColClass(lg, 'lg'),
  ].filter(Boolean).join(' ');

  // Default to w-full if any breakpoint is provided but mobile (xs) is not
  const defaultMobileWidth = (sm || md || lg) && !xs ? 'w-full' : '';

  return (
    <div className={`flex-shrink-0 ${defaultMobileWidth} ${colClasses || 'flex-1'} px-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * Tailwind-based replacement for Bootstrap Image
 */
export const Image = ({ src, alt = '', rounded = false, width, height, className = '', ...props }) => {
  const sizeClass = width ? `w-${width}` : '';
  const roundedClass = rounded ? 'rounded-lg' : '';
  
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClass} ${roundedClass} ${className}`}
      {...props}
    />
  );
};

export default { Container, Row, Col, Image };
