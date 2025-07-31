import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="font-bold text-3xl">Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/article/breaking-news-123?Lang=eng">Read in english</Link>
      <Link href="/article/breaking-news-123?Lang=fr">Read in french</Link>
    </div>
  );
};

export default page;
