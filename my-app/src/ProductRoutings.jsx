// import "./App.css";
import { Navbar } from "./Components/ProductAll/Navbar";
import { AllProducts } from "./Components/ProductAll/AllProducts";
import { Route, Routes } from "react-router-dom";
import { CompareProducts } from "./Components/ProductAll/CompareProducts";
import { SingleProductDetail } from "./Components/ProductAll/ProductDetailsPage/SingleProductDetail";
import SideMenuBhaskar from "./Components/sideMenuBhaskar/SideMenuBhaskar";
import { Cartpage } from "./Components/ProductAll/addToCartPage/Cartpage";
import { Context } from "./Components/Context";
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
                {/* <Route path="*" elements={ } /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default ProductRoutings;
