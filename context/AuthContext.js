import React, { useState, useEffect, createContext } from "react";
const AuthContext = createContext();
export const AuthProvider = (props) => {
    const [dropDownOpen, setdropDownOpen] = useState("");

    return (
        <AuthContext.Provider
            value={{
                // products,
                // cart,
                // order,
                // customerMeta,
                // customerIsLoggedIn,
                // handleAddToCart,
                // handleUpdateProductQuantity,
                // handleRemoveFromCart,
                // handleEmptyCart,
                // handleCaptureCart,
                // getCustomerMeta,
                // sendLoginToken,
                dropDownOpen,
                setdropDownOpen,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
