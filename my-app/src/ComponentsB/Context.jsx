import React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [productData, setProductData] = React.useState([]);
    const [select, setSelect] = React.useState("default");
    const [onHoverActiveContext, setOnHoverActiveContext] = React.useState(false);
    const [singleProduct, setSingleProduct] = React.useState([]);
    const [toCompare, setToCompare] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [toCart, setToCart] = React.useState([]);
    const [sideMenuValue, setSideMenuValue] = React.useState("");

    const value = {
        productData,
        setProductData,
        select,
        setSelect,
        toCompare,
        setToCompare,
        onHoverActiveContext,
        setOnHoverActiveContext,
        singleProduct,
        setSingleProduct,
        open,
        setOpen,
        toCart,
        setToCart,
        sideMenuValue,
        setSideMenuValue
    }

    return (
        <Context.Provider value={value}> {children}</Context.Provider >
    )
}