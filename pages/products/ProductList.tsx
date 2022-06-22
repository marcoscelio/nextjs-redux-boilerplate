import type { NextPage } from "next";
import Layout from "../../components/utils/Layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./components/Item";
import Row from "../../components/utils/Row";
import { AppDispatch, RootState } from "../../state/store";
import { fetchProducts } from "../../state/productsSlice";

const ProductList: NextPage = () => {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state: RootState) => state.products.data);
  const dispatch = useDispatch<AppDispatch>();
  const macaquinhoApi = process.env.MACAQUINHO_API;

  return (
    <Layout>
      <Row>
        {products.map((product) => {
          const imageUrl = `${macaquinhoApi}/products/image/${product.imageUrl}`;
          return (
            <Item
              id={product.id}
              imageUrl={imageUrl}
              measureUnit={product.measureUnit}
              name={product.name}
              price={product.price}
              defaultMeasureValue={product.defaultMeasureValue}
              key={product.id}
            />
          );
        })}
      </Row>
    </Layout>
  );
};

export default ProductList;
