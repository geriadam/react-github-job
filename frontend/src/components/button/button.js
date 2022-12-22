import React from 'react';

export const Button = ({
  children,
  onClick,
  variant,
  size,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`btn ${variant} ${size} w-full` + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};