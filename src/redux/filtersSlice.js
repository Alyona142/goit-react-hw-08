import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
    changeFilter(state, action) {
      // Реалізація changeFilter, якщо це потрібно
      state.name = action.payload;
    },
  },
});

// Експорт дій
export const { setNameFilter, changeFilter } = filtersSlice.actions;

// Селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filters.name;

// Експорт редюсера
export const filtersReducer = filtersSlice.reducer;
