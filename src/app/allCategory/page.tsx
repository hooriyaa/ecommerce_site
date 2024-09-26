"use client";

import React, { useState, useEffect } from "react";
import BestSellingCard from "@/components/bestSellingCard";

const AllCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const bestSell = [
    {
      src: "/pictures/bag.jpg",
      alt: "Gym Bag for Women",
      title: "Gym Bag for Women",
      description:
        "ETRONIK Gym Bag for Women, Personal Item Travel Duffel Bag with Shoes Compartment, Weekender Overnight Bag with Wet Pocket & USB Charging Port, Carry On Bag for Women, Travel, Gym, Weekend",
      price: 29.23,
      allCategory: "Bags",
      productDetails: "Gym-Bag-for-Women",
      quantity: 1,
    },
    {
      src: "/pictures/product5.jpg",
      alt: "Women's Casual Shirt",
      title: "Best Quality Shirts For women",
      description:
        "PRETTYGARDEN Women's Babydoll Peplum Shirt Puff Long Sleeve Bow Tie Front Trendy Cute Y2K Going Out Tops",
      price: 795,
      allCategory: "Clothing",
      productDetails: "women's-casual-shirt",
      quantity: 1,
    },
    {
      src: "/pictures/earnings1.jpg",
      alt: "Gold-Black Pearl Hoop Earrings",
      title: "Gold-Black Pearl Hoop Earrings",
      description:
        "In our signature color combination, white + black pearls circle the hoop earrings with gold splashes coming out. For a full set, match it back to the coordinating stretch bracelet.",
      price: 300,
      allCategory: "Accessories",
      productDetails: "Gold-Black-Pearl-Hoop-Earrings", // Unique identifier
      quantity: 1,
    },
    {
      src: "/pictures/Heels1.jpg",
      alt: "Woven Black Slingback Heels",
      title: "Woven Black Slingback Heels",
      description:
        "Secure day-to-night looks with these on-trend slingback heels. In an easy, long-hours heel height, the pointed-toe shoes have a comfortable strap that make for all-day wear. Pair it back to the matching crossbody bag.",
      price: 1000,
      allCategory: "Footwear",
      productDetails: "Woven-Black-Slingback-Heels", // Unique identifier
      quantity: 1,
    },
    {
      src: "/pictures/necklace1.jpg",
      alt: "Glass Pearl Pave Collar Necklace",
      title: "Glass Pearl Pave Collar Necklace",
      description:
        "Make a statement when you wear this stunning necklace alone or layered with other chains. This collar design features faux pearl pavé cabochons. In a classic chain link design that's perfect for any outfit, any occasion.",
      price: 700,
      allCategory: "Accessories",
      productDetails: "Glass-Pearl-Pave-Collar-Necklace", // Unique identifier
      quantity: 1,
    },
    {
      src: "/pictures/product8.jpg",
      alt: "MEROKEETY Women's Open Front Coatigan Sweater",
      title: "Long Sleeve Casual Knit Lapel Cardigan Coat with Pockets",
      description: "Best Quality Sweaters For women",
      price: 250,
      allCategory: "tops",
      productDetails: "lapel-cardigan-coat", // Unique identifier
      quantity: 1,
    },
    {
      src: "/pictures/scraf.jpg",
      alt: "Oblong Leopard Scarf",
      title: "Oblong Leopard Scarf",
      productDetails: "Oblong-Leopard-Scarf",
      price: 566,
      allCategory: "Clothing",
      description:
        "Leopard print can be a daunting addition to any wardrobe, which is why we created this scarf as the perfect entry point into the leopard trend revival. Fashioned with a subtle metallic sheen, the accessory travels well and thanks to the shape, can be worn in a variety of different ways.",
      quantity: 1,
    },

    {
      src: "/pictures/product9.jpg",
      alt: "Women's Summer Tracksuit",
      title: "Women's Summer Tracksuit",
      productDetails: "Women's-Summer-Tracksuit",
      price: 92.88,
      allCategory: "Clothing",
      description:
        "PRETTYGARDEN Women's Summer 2 Piece Outfits Ribbed Knit Lounge Sets Tracksuit Sleeveless Crop Tank Tops Wide Leg Casual Pants",
      quantity: 1,
    },

    {
      src: "/pictures/sunglasses.jpg",
      alt: "Gold Aviator Sunglasses",
      title: "Gold Aviator Sunglasses",
      productDetails: "Gold-Aviator-Sunglasses",
      price: 69.0,
      allCategory: "Accessories",
      description:
        "this gold pair is handmade and hand polished, because attention to detail is important to us. Unique summer sunglasses, they can be worn daily, while walking around the beach or on your next vacation.",
      quantity: 1,
    },

    {
      src: "/pictures/shoes.jpg",
      alt: "WHBM Fashion Sneaker",
      title: "WHBM Fashion Sneaker",
      productDetails: "WHBM-Fashion-Sneaker",
      price: 98.0,
      allCategory: "Shoes",
      description:
        "Inspired by fashion-forward street style, our WHBM® kicks will add a dose of sporty-chic to any look. We updated the classic styling in these genuine leather sneakers with gold and black-printed heel accents. Wear with everything from our WHBM Runway Legging to dresses and of course, your favorite jeans.",
      quantity: 1,
    },

    {
      src: "/pictures/product3.jpg",
      alt: "Long Sleeve Casual Sweater",
      title: "Long Sleeve Casual Sweater",
      productDetails: "Long-Sleeve-Casual-Sweater",
      price: 35.99,
      allCategory: "Clothing",
      description:
        "MEROKEETY Women's Open Front Coatigan Sweater Long Sleeve Casual Knit Lapel Cardigan Coat with Pockets",
      quantity: 1,
    },

    {
      src: "/pictures/necklace2.jpg",
      alt: "Gold Black Pearl Short Necklace",
      title: "Gold Black Pearl Short Necklace",
      productDetails: "Gold-Black-Pearl-Short-Necklace",
      price: 50.55,
      allCategory: "Accessories",
      description:
        "An elevated take on the choker, the short necklace features elegant pearls on one side and black gold on the other. Wear yours with sleeveless or scoop neckline.",
      quantity: 1,
    },

    {
      src: "/pictures/product2.jpg",
      alt: "Business Casual Top",
      title: "Business Casual Top",
      productDetails: "Business-Casual-Top",
      price: 45.92,
      allCategory: "Clothing",
      description:
        "Blooming Jelly Womens Dressy Casual Blouse Bow Tie Neck Business Casual Top Cut Out Short Sleeve Shirt.",
      quantity: 1,
    },

    {
      src: "/pictures/earnings2.jpg",
      alt: "Gold Cubic Zirconia Bezel Hoops",
      title: "Gold Cubic Zirconia Bezel Hoops",
      productDetails: "Gold-Cubic-Bezel-Hoops",
      price: 40.9,
      allCategory: "Accessories",
      description:
        "Every accessories closet needs hoop earrings. And if you're already stocked up on classic hoops, might we tempt you with these studded hoop earrings for a statement look? With bezels surrounding the shape, you'll be sure to turn heads each time you wear them. ",
      quantity: 1,
    },

    {
      src: "/pictures/bracelet.jpg",
      alt: "Gold + Black Glass Stretch Bracelet",
      title: "Gold + Black Glass Stretch Bracelet",
      productDetails: "Gold-Black-Glass-Stretch-Bracelet",
      price: 45.34,
      allCategory: "Accessories",
      description:
        "The mixture of shapes in the gold and black details make this bracelet an eye-catching accessory. Comfortable and sophisticated, wear yours with dresses or shorter sleeve lengths to keep it on display. Complete the set and match it back to the coordinating necklace and earrings.",
      quantity: 1,
    },
    {
      src: "/pictures/scraf2.jpg",
      alt: "Rhinestone Patterned Scarf",
      title: "Rhinestone Patterned Scarf",
      productDetails: "Rhinestone-Patterned-Scarf",
      price: 19.98,
      allCategory: "Clothing",
      description:
        "Cold weather calls for the right gear. Wrap yourself up in this Rhinestone Patterned Scarf to keep in all the heat. Adorned with gems all over, you're sure to make cold look cool.",
      quantity: 1,
    },
    {
      src: "/pictures/product4.jpg",
      alt: "Womens Dressy Casual Shirt ",
      title: "Womens Dressy Casual Shirt",
      productDetails: "Womens-Dressy-Casual-Shirt",
      price: 23.98,
      allCategory: "Clothing",
      description:
        "Legendary Whitetails Women's Trail Guide Fleece Button Down Shirt",
      quantity: 1,
    },
    {
      src: "/pictures/belt.jpg",
      alt: "Buckle Leather Belt",
      title: "Buckle Leather Belt",
      productDetails: "Buckle-Leather-Belt",
      price: 49.22,
      allCategory: "Belt",
      description:
        "Sam Edelman Women's Imitation Pearl Embellished Double-E Logo Plaque Buckle Leather Belt for Jeans, Dresses and Trousers",
      quantity: 1,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="max-h-screen bg-orange-100 flex justify-center items-center">Loading...</div>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="flex flex-row mt-64 md:mt-52 justify-center items-center max-h-screen">
          <p className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
            Loading products...
          </p>
          {/* Loader */}
          <div className="loader border-x-4 ml-5 md:ml-10 border-orange-500 rounded-full w-12 h-12 md:w-16 md:h-16 animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Heading */}
          <div className="text-center mt-4">
            <h1 className="text-black text-2xl font-bold tracking-tight lg:text-4xl capitalize">
              All Products
            </h1>
            <div className="w-28 h-1 mb-2 rounded-full bg-orange-600 inline-flex"></div>
          </div>

          {/* Products */}
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            {bestSell.map((item, i) => (
              <div key={i}>
                <BestSellingCard
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  price={item.price}
                  productDetails={item.productDetails}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllCategory;
