import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import Itemlist from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncfunc = categoryId ? getProductsByCategory : getProducts;
    asyncfunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <>
      <h2>{greetings}</h2>
      <Itemlist products={products} />
    </>
  );
};

export default ItemListContainer;
