import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./ItemProduct";
import SimpleSlider from "./SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesSlider from "./CategoriesSlider";
import Typography from "@mui/material/Typography";

function Products({
  products,
  onAddCart,
  categories,
  selectCategory,
  selectProduct,
}) {
  return (
    <>
      <SimpleSlider />
      <CategoriesSlider
        categories={categories}
        selectCategory={selectCategory}
      />
      <main style={{ margin: "5rem 1rem 2rem 1rem" }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{ textAlign: "center", mb: 4 }}
        >
          محصولات
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Product
                  item={item}
                  onAddCart={onAddCart}
                  selectProduct={selectProduct}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </>
  );
}

export default Products;
