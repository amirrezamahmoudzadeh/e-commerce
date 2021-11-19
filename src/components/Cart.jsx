import React from "react";
import { Container, Typography, Button, Grid, Modal, Box } from "@mui/material";
import ItemCart from "./ItemCart";
import { useMediaQuery } from "@mui/material";

function Cart({
  cart,
  updateQuantityHandler,
  removeItemHandler,
  emptyCartHandler,
  selectProduct,
}) {
  const matches = useMediaQuery("(min-width:600px)");
  function EmptyCart() {
    return (
      <Typography
        variant="h6"
        style={{
          marginTop: "2rem",
          direction: "rtl",
          textAlign: "center",
          color: "#b6b6b6",
        }}
      >
        سبد خرید خالی است...
      </Typography>
    );
  }

  const FilledCart = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = async () => {
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
    return (
      <>
        <Grid
          container
          spacing={3}
          style={{ marginTop: "2rem", flexDirection: "row-reverse" }}
        >
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <ItemCart
                item={item}
                removeItemHandler={removeItemHandler}
                updateQuantityHandler={updateQuantityHandler}
                selectProduct={selectProduct}
              />
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h5" color="initial" style={{ direction: "rtl" }}>
            قیمت کل : {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              size="large"
              type="button"
              color="error"
              style={{
                minWidth: "160px",
                margin: matches ? " 0 1rem 0 0" : "0",
              }}
              onClick={emptyCartHandler}
            >
              پاک کردن سبد خرید
            </Button>
            <Button
              onClick={handleOpen}
              variant="contained"
              size="large"
              type="button"
              color="success"
              style={{
                minWidth: "160px",
                margin: matches ? " 0 1rem 0 0" : "1rem 0 0 0",
              }}
            >
              پرداخت
            </Button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "#37e71f",
                // border: "2px solid #000",
                boxShadow: 24,
                p: 5,
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ direction: "rtl" }}
              >
                با تشکر از خرید شما
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                sx={{ direction: "rtl" }}
              >
                سفارش ما در اسرع وقت به دست شما خواهد رسید
              </Typography>
            </Box>
          </Modal>
        </div>
      </>
    );
  };

  if (!cart.line_items) {
    return (
      <Typography
        variant="h4"
        color="initial"
        sx={{ marginTop: "5rem", textAlign: "center", color: "#bbbbbb" }}
      >
        LOADING ...
      </Typography>
    );
  }

  return (
    <Container>
      <Typography
        variant="h4"
        color="initial"
        sx={{ marginTop: "5rem", direction: "rtl", textAlign: "center" }}
      >
        سبد خرید شما :
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
