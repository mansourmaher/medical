import React from "react";
import CardProducts from "./_compoenets/CardProducts";
import CheckoutCard from "./_compoenets/CheckoutCard";

function page() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-12 lg:px-12">
      <div className="lg:col-span-2 ">
        <CardProducts />
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <CheckoutCard />
      </div>
    </div>
  );
}

export default page;
