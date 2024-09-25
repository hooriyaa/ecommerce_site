// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'

// const ProductDetailsComponent = () => {
//   const [path, setPath] = useState("")

//   return (
//     <div>
//       <Image
//         alt='Product'
//         width={350}
//         height={350}
//         src={path ? path : "/pictures/product2.jpg"}
//         className='object-contain' // Ensures main product image is contained
//       />
//       <div className='flex justify-evenly items-center mx-auto mt-2'>
//         <div className='cursor-pointer w-16 h-16'>
//           <Image
//             alt='item'
//             width={60}
//             height={60}
//             src={"/pictures/product5.jpg"}
//             onClick={() => setPath("/pictures/product5.jpg")}
//             className='object-contain w-full h-full' // Ensures the image fits perfectly
//           />
//         </div>
//         <div className='cursor-pointer w-16 h-16'>
//           <Image
//             alt='item'
//             width={60}
//             height={60}
//             src={"/pictures/product3.jpg"}
//             onClick={() => setPath("/pictures/product3.jpg")}
//             className='object-contain w-full h-full' 
//           />
//         </div>
//         <div className='cursor-pointer w-16 h-16'>
//           <Image
//             alt='item'
//             width={60}
//             height={60}
//             src={"/pictures/product2.jpg"}
//             onClick={() => setPath("/pictures/product2.jpg")}
//             className='object-contain w-full h-full' 
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetailsComponent

