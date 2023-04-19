import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUrl = 'https://economia.awesomeapi.com.br/json/last/';

export const getCurrencyData = createAsyncThunk('detail/getDetail', async (id) => {
  const newid = `${id.slice(0, 3)
  }-${
    id.slice(3)}`;
  const dataStream = await fetch(`${fetchUrl}${newid}`);
  const data = await dataStream.json();
  const newdata = Object.entries(data);
  return newdata;
});

const initialState = {
  details: [],
  isLoading: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrencyData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getCurrencyData.fulfilled, (state, action) => {
      const isLoading = false;
      const details = action.payload;
      return {
        ...state,
        details,
        isLoading,
      };
    });
  },
});

export default currencySlice.reducer;
