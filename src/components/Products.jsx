import React from "react";
import { Grid, IconButton, Modal } from "@mui/material";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = ({ products, onCartItems }) => {
  return (
    <Grid container spacing={3} mt={5}>
      {products.map((product) => (
        <Grid container justify="center" item xs={2} key={product.id}>
          <Card>
            <CardContent>
              <Typography
                variant="caption"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                {product.category}
              </Typography>
            </CardContent>
            <CardMedia component="img" height="150" image={product.image} />
            <CardHeader
              title={product.title}
              titleTypographyProps={{ variant: "h7" }}
              style={{ textAlign: "center" }}
              subheader={`₱${product.price}`}
              sx={{ fontWeight: "bold" }}
            />
            <CardContent>
              <Typography variant="caption" textAlign="justify">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                set
                sx={{ backgroundColor: "lightgray" }}
                onClick={onCartItems}
              >
                <AddShoppingCartIcon></AddShoppingCartIcon>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
