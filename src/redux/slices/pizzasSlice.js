import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizza = createAsyncThunk('pizza/fetchPizza', async (params) => {
  const {currentPage, category, sortBy, order, search} = params
  const {data} = await axios.get(`https://6293fbc6089f87a57ac8115f.mockapi.io/api/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
  return data
})


const initialState = {
  items: [],
  status: 'loading'
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizza.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  }
})


export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
