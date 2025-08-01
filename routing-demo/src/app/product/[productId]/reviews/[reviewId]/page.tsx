import React from "react";

import { notFound } from "next/navigation";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error laoding review");
  }
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        review for {reviewId} of product {productId}
      </h1>
    </div>
  );
};

export default ProductReview;
