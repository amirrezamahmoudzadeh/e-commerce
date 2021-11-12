import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

function ItemCart({
  item,
  removeItemHandler,
  updateQuantityHandler,
  selectProduct,
}) {
  return (
    <Card style={{ display: "flex", justifyContent: "space-between" }}>
      <CardMedia
        component={Link}
        to={`/products/${item.product_id}`}
        onClick={() => selectProduct(item.product_id)}
        title={item.name}
        image={item.image.url}
        style={{ width: "30%", backgroundPosition: "center" }}
      />
      <div>
        <CardContent>
          <Typography
            variant="h5"
            color="initial"
            style={{ textAlign: "right" }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            style={{ textAlign: "right" }}
          >
            {item.price.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex" }}>
            <Button
              size="small"
              color="inherit"
              onClick={() => updateQuantityHandler(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography color="initial">{item.quantity}</Typography>
            <Button
              size="small"
              color="inherit"
              onClick={() => updateQuantityHandler(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            color="error"
            onClick={() => removeItemHandler(item.id)}
          >
            حذف محصول
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default ItemCart;
