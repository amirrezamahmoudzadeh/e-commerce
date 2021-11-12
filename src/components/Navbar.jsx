import React from "react";
import {
  AppBar,
  Badge,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import logo from "../asset/images/logo.png";

function Navbar({ totalItems }) {
  const location = useLocation();

  return (
    <CssBaseline>
      <AppBar position="fixed" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Typography variant="h5" color="initial" sx={{mr:1}}>
                فروشگاه مستطیل
              </Typography>
              <img
                src={logo}
                alt="Mostatil Shop"
                height="50px"
                style={{alignSelf: "baseline" }}
              />
            </Link>
          </div>
          {location.pathname !== "/cart" && (
            <div>
              <IconButton
                aria-label="Show Cart Item"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={totalItems} color="warning">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
}

export default Navbar;
