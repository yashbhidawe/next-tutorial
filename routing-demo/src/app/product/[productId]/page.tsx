import React from "react";
import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({ params }: Props) => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const productId = (await params).productId;
  console.log(productId);
  return <div>Product Details of {productId}</div>;
};

export default ProductDetails;
