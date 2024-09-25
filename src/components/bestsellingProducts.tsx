"use client";

import BestSellingCard from "./bestSellingCard";


const BestsellingProducts = () => {
    const bestSell=[
      {
        src: "/pictures/bag.jpg",
        alt: "Women's Fall Fashion Knit Cardigan Sweaters",
        title: "Long Sleeve V Neck Open Front Sweater Jacket with Scarf",
        price: 300,
        allCategory: "tops",
        productDetails: "open-front-sweater-jacket",
        quantity:1
      },
      {
        src: "/pictures/product5.jpg",
        alt: "Blooming Jelly Womens Dressy Casual Blouse Bow Tie Neck",
        title: "Business Casual Top Cut Out Short Sleeve Shirt",
        price: 150,
        allCategory: "tops",
        productDetails: "business-casual-top",
        quantity:1
      },
      {
        src: "/pictures/earnings1.jpg",
        alt: "MEROKEETY Women's Open Front Coatigan Sweater",
        title: "Long Sleeve Casual Knit Lapel Cardigan Coat with Pockets",
        price: 250,
        allCategory: "tops",
        productDetails: "open-front-sweater-jacket",
        quantity:1
      },
      {
        src: "/pictures/product10.jpg",
        alt: "Women's Fall Fashion Knit Cardigan Sweaters",
        title: "Long Sleeve V Neck Open Front Sweater Jacket with Scarf",
        price: 300,
        allCategory: "tops",
        productDetails: "open-front-sweater-jacket",
        quantity:1
      },
      {
        src: "/pictures/necklace1.jpg",
        alt: "Blooming Jelly Womens Dressy Casual Blouse Bow Tie Neck",
        title: "Business Casual Top Cut Out Short Sleeve Shirt",
        price: 150,
        allCategory: "tops",
        productDetails: "open-front-sweater-jacket",
        quantity:1
      },
      {
        src: "/pictures/product8.jpg",
        alt: "MEROKEETY Women's Open Front Coatigan Sweater",
        title: "Long Sleeve Casual Knit Lapel Cardigan Coat with Pockets",
        price: 250,
        allCategory: "tops",
        productDetails: "open-front-sweater-jacket",
        quantity:1
      },
      
      ]
  return (
    <div className="mb-[50px] mt-[100px]">
        {/* best selling prooduct here */}
        <div className="flex flex-wrap justify-center gap-5 ">
{bestSell.map((items,i)=>(
 <BestSellingCard
 key={i}
src={items.src}
alt={items.alt}
title={items.title}
price={items.price}
productDetails={items.productDetails}
quantity={items.quantity}
/>

))}
    </div>
    </div>
  );
};

export default BestsellingProducts;



