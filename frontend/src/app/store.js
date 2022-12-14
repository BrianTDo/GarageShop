import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import shopReducer from '../features/shops/shopSlice'
import customerReducer from '../features/customers/customerSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shops: shopReducer,
    customers: customerReducer,
  },
});
