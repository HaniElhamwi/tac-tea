import Hero from "@/components/products/hero";
import ProductsShow from "@/components/products/products-show";
import React from "react";

function Page() {
  return (
    <div>
      <Hero pageName="Products" />
      <ProductsShow />
    </div>
  );
}

export default Page;
