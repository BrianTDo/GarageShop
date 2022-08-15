import axios from "axios";

const API_URL = "/api/customer/";

// Get Customers
const getCustomers = async (shopId) => {
  const response = await axios.get(API_URL + shopId);
  return response.data;
};

// Create Customer
const createCustomer = async (customerData) => {
  const response = await axios.post(API_URL, customerData);
  return response.data;
};

// Delete Customer
const deleteCustomer = async (customerId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + customerId, config);
  return response.data;
};

const customerService = {
  getCustomers,
  createCustomer,
  deleteCustomer,
};
export default customerService;
