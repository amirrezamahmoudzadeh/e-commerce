import React, { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { commerce } from "./lib/commerce";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import SingleProduct from "./components/SingleProduct";

import Vazir from "../src/asset/fonts/Vazir.ttf"
// import IranNastaliq from "../src/asset/fonts/IranNastaliq.ttf"
// import IranSans from "../src/asset/fonts/IranSans.ttf"
// import Yekan from "../src/asset/fonts/Yekan.ttf"

const theme = createTheme({
  typography: {
    fontFamily : 'vazir'
  },
  components:{
    MuiCssBaseline:{
      styleOverrides:`
      @font-face {
        font-family: 'vazir';
        font-style: normal;
        src: local('Raleway'), local('Raleway-Regular'), url(${Vazir}) format('woff2');
      }
      `
    }
  }
})

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("category")
      ? JSON.parse(localStorage.getItem("category"))
      : []
  );
  const [selectedProduct, setSelectedproduct] = useState(
    localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : {}
  );

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
  };

  const addToCartHandler = async (id, quantity) => {
    const { cart } = await commerce.cart.add(id, quantity);

    setCart(cart);
  };

  const updateQuantityHandler = async (id, quantity) => {
    const { cart } = await commerce.cart.update(id, { quantity });

    setCart(cart);
  };

  const removeItemHandler = async (id) => {
    const { cart } = await commerce.cart.remove(id);

    setCart(cart);
  };

  const emptyCartHandler = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const selectCategory = (id) => {
    setSelectedCategory(
      products.filter((item) => item.categories[0].id === id)
    );
  };

  const selectProduct = (id) => {
    setSelectedproduct(products.find((item) => item.id === id));
  };

  useEffect(() => {
    fetchCart();
    fetchProducts();
    fetchCategories();
    localStorage.setItem("category", JSON.stringify(selectedCategory));
    localStorage.setItem("product", JSON.stringify(selectedProduct));
  }, [selectedCategory, selectedProduct]);

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <AllProducts
                products={products}
                selectCategory={selectCategory}
                categories={categories}
                onAddCart={addToCartHandler}
                selectProduct={selectProduct}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantityHandler={updateQuantityHandler}
                removeItemHandler={removeItemHandler}
                emptyCartHandler={emptyCartHandler}
                selectProduct={selectProduct}
              />
            }
          />
          <Route
            path="/category/:Categoryid"
            element={
              <CategoryPage
                selectedCategory={selectedCategory}
                categories={categories}
                selectCategory={selectCategory}
                onAddCart={addToCartHandler}
                selectProduct={selectProduct}
              />
            }
          />
          <Route
            path="/products/:Productid"
            element={
              <SingleProduct
                item={selectedProduct}
                onAddCart={addToCartHandler}
                selectProduct={selectProduct}
              />
            }
          />
        </Routes>
      </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
