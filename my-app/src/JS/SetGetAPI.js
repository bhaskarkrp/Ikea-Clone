import React from "react";
import { Context } from "../ComponentsB/Context";

export const SetGetAPI = () => {
  const { setProductData, setSingleProduct } = React.useContext(Context);
  const getAPi = (api) => {
    api
      .then((response) => response.json())
      .then((result) => setProductData(result));
  };

  const getAPiSingle = (api) => {
    api
      .then((response) => response.json())
      .then((result) => setSingleProduct(result));
  };

  return { getAPi, getAPiSingle };
};
