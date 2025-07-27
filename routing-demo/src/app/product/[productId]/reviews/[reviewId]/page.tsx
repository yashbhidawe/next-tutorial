import React from "react";

import { notFound } from "next/navigation";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

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
