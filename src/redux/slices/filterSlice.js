import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sortType = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFilters(state, action) {
      // console.log(action)
      state.currentPage = Number(action.payload.currentPage)
      state.categoryId = Number(action.payload.categoryId)
      state.sortType = action.payload.sort
    }
  },
})


export const { setCategory, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
