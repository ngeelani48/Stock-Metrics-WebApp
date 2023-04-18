import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUrl = 'https://financialmodelingprep.com/api/v3/fx?apikey=6739a7534e62f4b6274554e7e1dfb880';

const initialState = {
  forexs: [],
  isLoading: false,
};

export const getForex = createAsyncThunk('forex/getForex', async () => {
  try {
    const dataStream = await fetch(fetchUrl);
    const data = await dataStream.json();
    return data;
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