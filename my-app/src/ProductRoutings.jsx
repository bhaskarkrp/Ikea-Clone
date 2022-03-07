// import "./App.css";
import { Navbar } from "./ComponentsB/ProductAll/Navbar";
import { AllProducts } from "./ComponentsB/ProductAll/AllProducts";
import { Route, Routes } from "react-router-dom";
import { CompareProducts } from "./ComponentsB/ProductAll/CompareProducts";
import { SingleProductDetail } from "./ComponentsB/ProductAll/ProductDetailsPage/SingleProductDetail";
import SideMenuBhaskar from "./ComponentsB/sideMenuBhaskar/SideMenuBhaskar";
import { Cartpage } from "./ComponentsB/ProductAll/addToCartPage/Cartpage";
import { Delivery } from "./ComponentsB/ProductAll/addToCartPage/DeliveryInfo/Delivery"
import { Context } from "./ComponentsB/Context";
import React from "react";
import Footer from "./components/Pages/About/AboutComponents/Footer";

function ProductRoutings() {

    const { sideMenuValue } = React.useContext(Context);
    return (
        <div >
            <Navbar />
            {/* <AllProducts /> */}
            <SideMenuBhaskar value={sideMenuValue} />
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/comparision" element={<CompareProducts />} />
                <Route path="/:id" element={<SingleProductDetail />} />
                <Route path="/cart" element={<Cartpage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default ProductRoutings;
