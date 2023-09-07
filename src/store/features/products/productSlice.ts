import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {

    return await productService.getAllAsync()
    
  } catch (err) {
    if(err){
      let err: any;
      return thunkAPI.rejectWithValue(err.message)
    }
  }
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.loading = true
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = null
    })
    .addCase(getAllProducts.rejected, (state) => {
      state.loading = false
      state.products = []
      // state.error = action.payload
    })
}
})

export default productSlice.reducer

 