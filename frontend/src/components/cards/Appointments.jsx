import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardHeader } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  getCustomers,
  deleteCustomer,
  reset,
} from "../../features/customers/customerSlice";

function Appointments({ shop }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { customers, isError, message } = useSelector(
    (state) => state.customers
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCustomers(shop._id));

    return () => dispatch(reset);
  }, [shop, user, isError, message, dispatch]);

  var customerRows = customers.map((customer) => {
    return {
      id: customer._id,
      name: customer.name,
      phone: customer.phone,
      date: customer.date,
    };
  });

  console.log(customerRows);
  const [rows, setRows] = useState(customerRows);

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    dispatch(deleteCustomer(id));
  };

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "phone", headerName: "Phone", width: 300 },
    { field: "date", headerName: "Date", type: "dateTime", width: 300 },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 250,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<CheckIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Card>
      <CardHeader title="Latest Appointments" />
      <Box sx={{ minWidth: 400 }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Box>
    </Card>
  );
}

export default Appointments;
