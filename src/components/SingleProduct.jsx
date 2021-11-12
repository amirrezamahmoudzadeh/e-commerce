import React from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardMedia, Card } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RelatedSlider from "./RelatedSlider";

function SingleProduct({ item, onAddCart , selectProduct }) {
  const matches = useMediaQuery("(min-width:600px)");
  if (!item) {
    return (
      <Typography variant="h3" color="initial" sx={{ mt: 10 }}>
        Loading ...
      </Typography>
    );
  }
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: matches ? "row-reverse" : "column",
          maxWidth: "1000px",
          margin: matches ? "5rem auto" : "5rem 2rem",
        }}
      >
        <CardMedia
          image={item.image.url}
          sx={{
            paddingTop: matches ? "70vh" : "60vh",
            paddingInline: matches ? "15rem" : "0",
            backgroundPosition: "center center",
          }}
        />
        <div
          style={{
            display: "flex",
            direction: "rtl",
            flexDirection: "column",
            alignItems: matches ? "flex-end" : "center",
            marginLeft: matches ? "auto" : "0",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h2" color="initial" sx={{ my: 3 }}>
              {item.name}
            </Typography>
            <Typography
              variant="h5"
              color="initial"
              sx={{ textAlign: "center" }}
            >
              {item.price.formatted_with_symbol}
            </Typography>
            <Typography variant="body2" color="initial">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              alignSelf: matches ? "flex-start" : "center",
              widows: "100%",
            }}
            onClick={(e) => onAddCart(item.id, 1, e)}
          >
            <IconButton aria-label="Add To Cart">
              <AddShoppingCartIcon color="secondary" />
            </IconButton>
          </CardActions>
        </div>
      </Card>
      <RelatedSlider selectProduct={selectProduct} related={item.related_products} />
    </>
  );
}

export default SingleProduct;
