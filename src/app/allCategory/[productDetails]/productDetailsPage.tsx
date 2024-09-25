"use client";

import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import ToastAddToCart from "@/components/toastAddToCart";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

// Sample product data
const products = [
  {
    src: "/pictures/bag.jpg",
    alt: "Gym Bag for Women",
    title: "Gym Bag for Women",
    description:
      "ETRONIK Gym Bag for Women, Personal Item Travel Duffel Bag with Shoes Compartment, Weekender Overnight Bag with Wet Pocket & USB Charging Port, Carry On Bag for Women, Travel, Gym, Weekend",
    price: 29.23,
    allCategory: "Bags",
    productDetails: "Gym-Bag-for-Women",
    availableColors: ["pink", "black", "#FCF5ED", "blue"],
    availableSizes: ["Free Size"],
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
    availableColors: ["Black", "blue"],
    availableSizes: ["S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    src: "/pictures/earnings1.jpg",
    alt: "Gold-Black Pearl Hoop Earrings",
    title: "Gold-Black Pearl Hoop Earrings",
    description:
      "In our signature color combination, white + black pearls circle the hoop earrings with gold splashes coming out. For a full set, match it back to the coordinating stretch bracelet.",
    price: 300,
    allCategory: "Acessories",
    productDetails: "Gold-Black-Pearl-Hoop-Earrings", // Unique identifier
    availableColors: ["Gold w Silver"],
    availableSizes: ["Free Size"],
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
    availableColors: ["Black"],
    availableSizes: [
      "5",
      "5.5",
      "6",
      "6.5",
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "11",
    ],
    quantity: 1,
  },
  {
    src: "/pictures/necklace1.jpg",
    alt: "Glass Pearl Pave Collar Necklace",
    title: "Glass Pearl Pave Collar Necklace",
    description:
      "High-quality wireless headphones with excellent sound clarityMake a statement when you wear this stunning necklace alone or layered with other chains. This collar design features faux pearl pavé cabochons. In a classic chain link design that's perfect for any outfit, any occasion.",
    price: 700,
    allCategory: "Accessories",
    productDetails: "Glass-Pearl-Pave-Collar-Necklace",
    availableColors: ["#FCF5ED"],
    availableSizes: ["Free Size "],
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
    availableColors: ["gray"],
    availableSizes: ["M", "L"],
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
    availableColors: ["Brown"],
    availableSizes: ["Free Size"],
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
    availableColors: ["Black", "pink", "white"],
    availableSizes: ["S", "M", "L", "XL"],
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
    availableColors: ["#FFFBDA"],
    availableSizes: ["Free Size"],
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
    availableColors: ["White"],
    availableSizes: [
      "5",
      "5.5",
      "6",
      "6.5",
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "11",
    ],
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
    availableColors: ["Brown", "black", "Purple"],
    availableSizes: ["Free Size"],
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
    availableColors: ["#FFFBDA"],
    availableSizes: ["Free Size"],
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
    availableColors: ["White", "red"],
    availableSizes: ["S", "M", "L", "XL"],
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
    availableColors: ["#FFFBDA"],
    availableSizes: ["Free Size"],
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
    availableColors: ["Black", "#FFFBDA"],
    availableSizes: ["Free Size"],
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
    availableColors: ["Black", "Grey"],
    availableSizes: ["Free Size"],
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
    availableColors: ["green", "red", "blue"],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 1,
  },
  {
    src: "/pictures/belt.jpg",
    alt: "Buckle Leather Belt",
    title: "Buckle Leather Belt",
    productDetails: "Buckle-Leather-Belt",
    price: 490.22,
    allCategory: "Belt",
    description:
      "Sam Edelman Women's Imitation Pearl Embellished Double-E Logo Plaque Buckle Leather Belt for Jeans, Dresses and Trousers",
    availableColors: ["#FFFBDA", "Black"],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 1,
  },
];

const ProductDetailsPage = () => {
  const params = useParams(); // Get dynamic route params
  const { productDetails } = params;

  // Find the product by matching the dynamic route param
  const product = products.find((p) => p.productDetails === productDetails);

  if (!product) {
    return <div>Product not found</div>;
  }

  type CartItem = {
    title: string;
    image: string;
    productDetails: string;
    price: number;
    allCategory: string;
    size: string;
    color: string;
    quantity: number;
  };

  // Update cart item correctly
  const [cartItem, setCartItem] = useState<CartItem>({
    title: product.title,
    image: product.src,
    productDetails: product.productDetails,
    price: product.price,
    allCategory: product.allCategory,
    size: product.availableSizes[0] || "",  // Ensure there is a default value
    color: product.availableColors[0] || "", // Ensure there is a default value
    quantity: product.quantity,
  });


  const handleQuantityChange = (action: "increment" | "decrement") => {
    setCartItem((prev) => {
      let newQuantity = prev.quantity;
      if (action === "increment") newQuantity += 1;
      if (action === "decrement" && newQuantity > 1) newQuantity -= 1; // Prevent negative quantity

      return { ...prev, quantity: newQuantity };
    });
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row lg:space-x-8 space-y-6 lg:space-y-0 lg:w-4/5 mx-auto">
        {/* Product image */}
        <div className="flex-shrink-0 lg:w-1/2 w-1/2 max-h-[500px] ml-16 md:-ml-16 rounded mb-6 lg:mb-0 overflow-hidden">
          <Image
            src={product.src} // Ensure it's a string
            alt={product.alt}
            className="w-full h-full object-contain object-center"
            width={600}
            height={600}
          />
        </div>

        {/* Product details */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 flex flex-col">
          <h2 className="text-sm font-semibold text-gray-500 tracking-widest">
            {product.allCategory}
          </h2>
          <h1 className="mt-2 text-2xl lg:text-3xl font-semibold tracking-tight mb-1">
            {product.title}
          </h1>
          <p className="mt-2 leading-relaxed text-base font-normal text-black line-clamp-2">
            {product.description}
          </p>

          {/* Color selection */}
          <div className="flex mt-6 items-center mb-5">
            <span className="mr-3 text-base font-semibold text-black">
              Color
            </span>
            {product.availableColors.map((color, index) => (
              <button
                key={index}
                className={`border-2 rounded-full w-6 h-6 focus:border-black focus:outline-none active:border-black mr-1 capitalize`}
                style={{ backgroundColor: color }}
                onClick={() => setCartItem({ ...cartItem, color })}
              />
            ))}
          </div>

          {/* Size selection */}
          <div className="flex items-center mb-5">
            <span className="mr-3 text-base font-semibold text-black">
              Size
            </span>
            <div className="form-control w-fit">
              <select
                className="select select-bordered"
                defaultValue={cartItem.size}
                onChange={(e) =>
                  setCartItem({ ...cartItem, size: e.target.value })
                }
              >
                <option disabled>Select Size</option>
                {product.availableSizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

                  {/* Quantity control */}
                  <div className="flex items-center mt-4">
            <span className="mr-3 text-base font-semibold">Quantity:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleQuantityChange("decrement")}
                  className="group bg-gray-800 flex hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3"
              >
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
              </button>
              <span className="text-base">{cartItem.quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                  className="group bg-gray-800 flex hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3"
              >
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold tracking-tight text-black">
              ${cartItem.price * cartItem.quantity}
            </span>
            <ToastAddToCart cartItem={cartItem} />
          </div>

          {/* Buy now button */}
          <button className="group bg-gray-800 mt-4 w-full flex justify-center hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
