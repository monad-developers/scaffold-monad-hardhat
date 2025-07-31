import React from "react";

interface SkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
  width?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

export const Skeleton = ({
  className = "",
  lines = 1,
  height = "1rem",
  width = "100%",
  rounded = "md",
}: SkeletonProps) => {
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  if (lines === 1) {
    return (
      <div
        className={`skeleton bg-base-300 ${roundedClasses[rounded]} ${className}`}
        style={{ height, width }}
        aria-label="Loading content..."
      />
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`skeleton bg-base-300 ${roundedClasses[rounded]} ${index === lines - 1 ? "w-3/4" : "w-full"}`}
          style={{ height }}
          aria-label={`Loading content line ${index + 1}`}
        />
      ))}
    </div>
  );
};
