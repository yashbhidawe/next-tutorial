import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  console.log(productId);
  return <div>Product Details of {productId}</div>;
};

export default ProductDetails;
