import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { allProducts, setProductsData } from "../features/counter/productSlice";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
import styles from "./Counter.module.css";

export function ProductList() {
  const dispatch = useAppDispatch();
  console.log(dispatch);

  const products = useAppSelector(allProducts);
  //   useEffect(() => {
  //     (() => {
  //       dispatch(setProductsData);
  //       console.log(products);
  //     })();
  //   }, [dispatch, products]);
  console.log(products);

  return (
    <div>
      <button onClick={() => dispatch(setProductsData())}>click me</button>
    </div>
  );
}
