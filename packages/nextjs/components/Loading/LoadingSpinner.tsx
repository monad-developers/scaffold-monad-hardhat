import React from "react";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  color?: "primary" | "secondary" | "accent" | "neutral";
}

export const LoadingSpinner = ({ size = "md", className = "", color = "primary" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    neutral: "text-neutral",
  };

  return (
    <span
      className={`loading loading-spinner ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      aria-label="Loading..."
      role="status"
    />
  );
};
