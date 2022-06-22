import React, { useState } from "react";

import styles from "../../../styles/Item.module.css";

import { FaPlusCircle } from "react-icons/fa";
import { useRouter } from "next/router";

interface Item {
  id: string;
  name: string;
  imageUrl: string;
  measureUnit: string;
  price: number;
  defaultMeasureValue: number;
}

const Item = ({ id, name, imageUrl, measureUnit, price }: Item) => {
  const router = useRouter();
  const [measureValue, setMeasureValue] = useState({
    product: id,
    amount: 0,
  });
  const addProduct = async (id: string) => {
    console.log(measureValue);
  };

  const productView = (id: string) => {
    router.push(`/productDetails/${id}`);
  };

  const onFinishFailed = (errorInfo: any) => {};
  const addAmount = (amount: number) => {
    setMeasureValue({ product: id, amount });
  };

  return (
    <div className={styles.Container} onClick={() => productView(id)} key={id}>
      <img className={styles.productListImage} src={imageUrl}></img>

      <div>R$ {price} </div>

      <div>
        <a onClick={() => addProduct(id)}>
          <FaPlusCircle />
        </a>
      </div>
    </div>
  );
};

export default Item;
