"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathName = usePathname();

  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <div>
      ReviewID {reviewId} Not Found for product of {productId}
    </div>
  );
};

export default NotFound;
