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
import BuildIcon from "@mui/icons-material/Build";
import Stack from "@mui/material/Stack";
import UpdateForm from "../dialogs/UpdateForm";
import DeleteDialog from "../dialogs/DeleteDialog";

function ShopControl({ shop }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ height: "100%" }} {...shop}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Shop Controls
            </Typography>
            <Typography variant="h4">
              <Stack spacing={5} direction="row">
                <UpdateForm key={shop._id} shop={shop} />
                <DeleteDialog key={shop._id} shop={shop} />
              </Stack>
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "error.light",
                height: 56,
                width: 56,
              }}
            >
              <BuildIcon />
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
            Edit form and Delete Shop
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ShopControl;
