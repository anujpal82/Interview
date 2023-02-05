import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { ProductList } from "./Components/ProductListing";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
