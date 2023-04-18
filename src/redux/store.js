import { configureStore } from '@reduxjs/toolkit';
import forexReducer from './forex/forexSlice';
import currencyReducer from './currency/currencySlice';

const store = configureStore({
  reducer: {
    forex: forexReducer,
    currency: currencyReducer,
  },
});

export default store;
