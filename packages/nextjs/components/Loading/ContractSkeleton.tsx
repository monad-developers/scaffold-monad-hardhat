import React from "react";
import { Skeleton } from "./Skeleton";

export const ContractCardSkeleton = () => {
  return (
    <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-4 py-4">
      <div className="flex items-center gap-4">
        <Skeleton width="2rem" height="2rem" rounded="full" />
        <Skeleton width="8rem" height="1.5rem" />
      </div>
      <Skeleton lines={2} />
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Skeleton width="4rem" height="1rem" />
          <Skeleton width="5rem" height="1rem" />
        </div>
      </div>
    </div>
  );
};

export const ContractVariablesSkeleton = () => {
  return (
    <div className="bg-base-300 rounded-3xl px-6 lg:px-8 py-4 shadow-lg shadow-base-300">
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton width="6rem" height="1.25rem" />
            <Skeleton width="10rem" height="1rem" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ContractMethodsSkeleton = () => {
  return (
    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 p-5">
      <div className="space-y-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton width="8rem" height="1.5rem" />
            <div className="space-y-2">
              <Skeleton lines={2} />
            </div>
            <div className="flex justify-end">
              <Skeleton width="5rem" height="2rem" rounded="lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
