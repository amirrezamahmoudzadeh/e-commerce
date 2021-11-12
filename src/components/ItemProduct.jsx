import React from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardMedia, Card } from "@mui/material";
import { Link } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ItemProduct({ item, onAddCart , selectProduct }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component={Link}
        to={`/products/${item.id}`}
        onClick={()=>selectProduct(item.id)}
        image={item.image.url}
        sx={{
          height: 0,
          paddingTop: "130%",
          backgroundPosition: "center center",
        }}
      />
      <CardContent sx={{backgroundColor: "#0288d1"}}>
        <div style={{ display: "flex", justifyContent: "space-between" , maxHeight:"2rem" }}>
          <Typography variant="h5" color="initial">
            {item.name}
          </Typography>
          <Typography variant="h5" color="initial" sx={{ direction: "rtl" }}>
            {item.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" color="initial">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "flex-end" , backgroundColor: "#0288d1" }}
        onClick={(e) => onAddCart(item.id, 1, e)}
      >
        <IconButton aria-label="Add To Cart" color="secondary" >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemProduct;
