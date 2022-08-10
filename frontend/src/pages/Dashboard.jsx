import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShopForm from "../components/ShopForm";
import ShopItem from "../components/ShopItem";
import Spinner from "../components/Spinner";
import { getShops, reset } from "../features/shops/shopSlice";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(16),
    },
  },
  offWhitePaper: {
    backgroundColor: "offWhite",
  },
}));

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { shops, isLoading, isError, message } = useSelector(
    (state) => state.shops
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getShops());

    return () => dispatch(reset);
  }, [user, navigate, isError, message, dispatch]);

  // Material UI
  const drawerWidth = 240;
  const classes = useStyles();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          columns
          sx={{
            mx: 2,
            my: 4,
          }}
        >
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <Divider />
              <List></List>
            </Box>
          </Drawer>
          <Box component="main" color="secondary">
            <Paper className="offWhitePaper" elevation={6}>
              <Box>
                <Typography component="h3" variant="h3" color="primary">
                  <DashboardIcon fontSize="large" /> Dashboard
                </Typography>
              </Box>
            </Paper>
            <Grid component="Box">
              {shops.length > 0 ? (
                <div className="shops">
                  {shops.map((shop) => (
                    <ShopItem key={shop._id} shop={shop} />
                  ))}
                </div>
              ) : (
                <>
                  <Grid>
                    <Typography
                      component="h6"
                      variant="h6"
                      color="primary"
                      sx={{
                        my: 2,
                      }}
                    >
                      Create a shop to get started
                    </Typography>
                    <ShopForm />
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
