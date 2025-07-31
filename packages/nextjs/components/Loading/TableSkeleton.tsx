import React from "react";
import { Skeleton } from "./Skeleton";

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  showHeader?: boolean;
  className?: string;
}

export const TableSkeleton = ({ rows = 5, columns = 6, showHeader = true, className = "" }: TableSkeletonProps) => {
  return (
    <div className={`overflow-x-auto w-full shadow-2xl rounded-xl ${className}`}>
      <table className="table bg-base-100 w-full md:table-md table-sm">
        {showHeader && (
          <thead>
            <tr>
              {Array.from({ length: columns }).map((_, index) => (
                <th key={index} className="bg-primary">
                  <Skeleton height="1rem" />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-base-100" : "bg-base-50"}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="py-4">
                  <Skeleton height="1rem" width={colIndex === 0 ? "60%" : colIndex === columns - 1 ? "40%" : "80%"} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TransactionTableSkeleton = () => {
  return <TableSkeleton rows={8} columns={7} className="animate-pulse" />;
};
