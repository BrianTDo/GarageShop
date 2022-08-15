import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardHeader,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  getCustomers,
  deleteCustomer,
  reset,
} from "../../features/customers/customerSlice";

const initialRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Appointments({ shop }) {
  const dispatch = useDispatch();

  const { customers, isLoading, isError, message } = useSelector(
    (state) => state.customers
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCustomers(shop._id));

    return () => dispatch(reset);
  }, [customers, isError, message, dispatch]);

  const customerRows = customers;

  const [rows, setRows] = useState(initialRows);

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id))
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'phone', headerName: 'Phone', width: 300 },
    { field: 'date', headerName: 'Date', type: "dateTime", width: 300 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Action',
      width: 250,
      cellClassName: 'actions',
      getActions: ({id}) => {
        return [
          <GridActionsCellItem
            icon={<CheckIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      }
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
