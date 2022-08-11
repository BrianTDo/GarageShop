import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import { updateShop } from "../../features/shops/shopSlice";

function ActiveCard({ shop }) {
  const [value, setValue] = useState(false);

  const { active } = FormData;

  const dispatch = useDispatch();
  const onCheck = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const shopData = {
      active,
    };

    dispatch(updateShop(shopData));
  };

  return (
    <Card sx={{ height: "100%" }} {...shop}>
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                Appointments
              </Typography>
              <Typography color="textPrimary" variant="h4">
                Activate
                <Switch
                  id="active"
                  name="active"
                  value={active}
                  onChange={onCheck}
                  color="success"
                  defaultChecked={shop.active}
                ></Switch>
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "success.main",
                  height: 56,
                  width: 56,
                }}
              >
                <LockIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Box
            sx={{
              pt: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              sx={{
                mr: 1,
              }}
              variant="body2"
            >
              <Button variant="contained" color="primary" type="submit">Confirm</Button>
            </Typography>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}

export default ActiveCard;
