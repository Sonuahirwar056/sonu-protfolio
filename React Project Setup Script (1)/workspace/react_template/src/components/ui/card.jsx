import React from "react";

const Card = React.forwardRef(({
  className = "",
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-700 bg-gray-800 text-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = React.forwardRef(({
  className = "",
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({
  className = "",
  children,
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      className={`text-xl font-semibold leading-none tracking-tight text-white ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({
  className = "",
  children,
  ...props
}, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-gray-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({
  className = "",
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({
  className = "",
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };