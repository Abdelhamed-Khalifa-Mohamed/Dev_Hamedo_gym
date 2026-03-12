import { createContext, useState, useContext, useEffect, useRef } from "react";
const ShoppingCartContext = createContext({});





const ShoppingCartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("shopping-cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [cartAlertMessage, setCartAlertMessage] = useState("");

    const previousCartLength = useRef(cartItems.length);
    const alertTimerRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const showCartAlert = (message) => {
        setCartAlertMessage(message);

        if (alertTimerRef.current) {
            clearTimeout(alertTimerRef.current);
        }

        alertTimerRef.current = setTimeout(() => {
            setCartAlertMessage("");
        }, 2200);
    };

    const closeCartAlert = () => {
        setCartAlertMessage("");
        if (alertTimerRef.current) {
            clearTimeout(alertTimerRef.current);
            alertTimerRef.current = null;
        }
    };

    useEffect(() => {
        if (cartItems.length > previousCartLength.current) {
            showCartAlert("Item added to cart successfully.");
        }

        if (cartItems.length < previousCartLength.current) {
            showCartAlert("Item removed from cart.");
        }

        previousCartLength.current = cartItems.length;
    }, [cartItems]);

    useEffect(() => {
        return () => {
            if (alertTimerRef.current) {
                clearTimeout(alertTimerRef.current);
            }
        };
    }, []);


    const getItemQuantity = (id) =>
        {

        return cartItems.find(item => item.id === id)?.quantity || 0;

    }


    const increaseCartQuantity = (id) => 
        
        {

        setCartItems(

            (currItems) => {
            if (currItems.find(item => item.id === id) == null) 
                {
                return [...currItems, { id, quantity: 1 }]
            } 

            
            else {

                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else 
                        {
                        return item
                    }
                })
            }
        })
    }

    
    const decreaseCartQuantity = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) 
                {;
                return currItems.filter(item => item.id !== id)
            } 
            else {
                return currItems.map(item =>
                    {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else 
                        {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id) =>
         {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ cartItems , getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartAlertMessage, closeCartAlert }}>
            {children}
        </ShoppingCartContext.Provider>
    );


}



export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};



