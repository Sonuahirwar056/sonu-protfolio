import React from "react";

const Button = React.forwardRef(({ 
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props 
}, ref) => {
  // Style configurations based on variants
  const variantStyles = {
    default: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "border border-teal-400 text-teal-400 hover:bg-teal-400/10",
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    link: "text-teal-400 hover:underline",
  };

  // Size configurations
  const sizeStyles = {
    default: "py-2 px-4 text-sm",
    sm: "py-1 px-3 text-xs",
    lg: "py-3 px-6 text-base",
  };

  // Compute the final className with proper variants and sizes
  const computedClassName = `
    inline-flex items-center justify-center rounded-md
    font-medium transition-colors focus-visible:outline-none 
    focus-visible:ring-2 focus-visible:ring-teal-500 
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantStyles[variant] || variantStyles.default}
    ${sizeStyles[size] || sizeStyles.default}
    ${className}
  `;

  // For asChild, we clone the first child and add the props
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${computedClassName} ${children.props.className || ""}`,
      ref,
      ...props,
    });
  }

  // Default button rendering
  return (
    <button className={computedClassName} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };