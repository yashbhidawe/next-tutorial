"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing order");
    router.replace("/");
  };
  return (
    <>
      <h1>order product</h1>
      <button onClick={handleClick}>order</button>
    </>
  );
};

export default OrderProduct;
