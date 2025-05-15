import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children} ) =>{
    const [cartItem, setCartItem] = useState(()=>{
        try {
            const savedItems = localStorage.getItem("cart");
            return savedItems ? JSON.parse(savedItems) : [];
        } catch (error) {
            console.log(error)
            return [];
        }
    })

    useEffect(()=>{

        try {
            localStorage.setItem("cart", JSON.stringify(cartItem))
        } catch (error) {
            console.log(error)
        }
    
    },[cartItem])


    const addToCart = (product) =>{
        setCartItem((prev) => [...prev, product])
    }


   const  removeCartItem = (id) =>{
    setCartItem((prev) =>{
        const removed = prev.filter((item) => item.id !== id);
        return removed;
    })
   }

   const removeAll =() =>{
    setCartItem([]);
   }

  const contextValue ={
    cartItem,
    addToCart,
    removeCartItem,
    removeAll
   }

   return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
   )

}

export default CartContext;