import { useDispatch } from "react-redux";
import { deleteShop } from "../features/shops/shopSlice";

import { Box, Container, Grid } from "@mui/material";

import ShopInfo from "./cards/ShopInfo";
import ActiveCard from "./cards/ActiveCard";
import ShopControl from "./cards/ShopControl";
import VisitCard from "./cards/VisitCard";

function ShopItem({ shop }) {
  const dispatch = useDispatch();
  return (
    <Container maxWidth={false} sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ShopInfo key={shop._id} shop={shop} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ActiveCard key={shop._id} shop={shop} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <VisitCard key={shop._id} shop={shop} />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ShopControl key={shop._id} shop={shop} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShopItem;
