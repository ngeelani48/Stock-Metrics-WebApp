import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUrl = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,AUD-BRL,GBP-USD,ARS-USD,JPY-USD,CHF-USD,CNY-USD,ILS-USD,BTC-USD,LTC-USD,ETH-USD,XRP-USD,BRL-EUR,USD-EUR,CAD-EUR,GBP-EUR';
const initialState = {
  forexs: [],
  isLoading: false,
};

export const getForex = createAsyncThunk('forex/getForex', async () => {
  try {
    const dataStream = await fetch(fetchUrl);
    const data = await dataStream.json();
    const newdata = Object.entries(data);
    return newdata;
  } catch (error) {
    return error;
  }
});

const forexSlice = createSlice({
  name: 'forex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getForex.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getForex.fulfilled, (state, action) => {
      const isLoading = false;
      const forexs = action.payload;
      return {
        ...state,
        forexs,
        isLoading,
      };
    });
  },
});

export default forexSlice.reducer;
