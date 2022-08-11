import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateShop } from "../../features/shops/shopSlice";
import states from "../States";

// Material UI
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  MenuItem,
} from "@mui/material";

function UpdateForm({shop}) {
  const [FormData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    active: false,
  });

  const { name, address, city, state, zip, phone, active } = FormData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCheck = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const shopData = {
      name,
      address,
      city,
      state,
      zip,
      phone,
      active,
    };

    dispatch(updateShop(shopData));
  };

  // Material UI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="success" variant="contained" onClick={handleOpen} size='large'>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <DialogContentText>
              Please complete all fields to get started on your shop!
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  type="text"
                  label="Shop Name"
                  id="name"
                  name="name"
                  value={shop.name}
                  placeholder="Enter your shop name"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="dense"
                  type="text"
                  label="Address"
                  id="address"
                  name="address"
                  value={shop.address}
                  placeholder="Enter your shop address"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="dense"
                  type="text"
                  label="City"
                  id="city"
                  name="city"
                  value={shop.city}
                  placeholder="Enter your shop city"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  autoFocus
                  select
                  margin="dense"
                  type="text"
                  label="State"
                  id="state"
                  name="state"
                  value={shop.state}
                  onChange={onChange}
                >
                  {states.map((state) => (
                <MenuItem key={state} value={state} >
                  {state}
                </MenuItem>
              ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="dense"
                  type="text"
                  label="Zip Code"
                  id="zip"
                  name="zip"
                  value={shop.zip}
                  placeholder="Enter your shop zip code"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="dense"
                  type="text"
                  label="Phone"
                  id="phone"
                  name="phone"
                  value={shop.phone}
                  placeholder="Enter your phone number"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Active"
                  control={
                    <Switch
                      id="active"
                      name="active"
                      value={shop.active}
                      onChange={onCheck}
                      color="primary"
                    />
                  }
                  label="Active"
                  labelPlacement="top"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default UpdateForm;
