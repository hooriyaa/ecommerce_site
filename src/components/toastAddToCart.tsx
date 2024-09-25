"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastAddToCart = ({cartItem}:any) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast.success("Item Successfully Placed in Your Cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
 
  return (
    <div>
    <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
      {/* <button onClick={notify}>Notify!</button> */}
      <button onClick={notify} className="group bg-gray-800 flex hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3">
        <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
        Add to Cart
      </button>
      
    </div>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ToastAddToCart;
