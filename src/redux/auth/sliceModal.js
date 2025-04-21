import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: {
    transactionDate: "",
    type: "",
    categoryId: "",
    comment: "",
    amount: 0,
  },
  isEditModalOpen: false,
  isAddModalOpen: false,
  isEditId: "",
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    takeTransactionData: (state, { payload }) => {
      state.transaction = payload;
    },
    openEditModal: (state) => {
      state.isEditModalOpen = true;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.transaction = initialState.transaction;
    },
    openAddModal: (state) => {
      state.isAddModalOpen = true;
    },
    closeAddModal: (state) => {
      state.isAddModalOpen = false;
      state.transaction = initialState.transaction;
    },
    addEditId: (state, { payload }) => {
      state.isEditId = payload;
    },
  },
});

export const modalsReducer = modalsSlice.reducer;

export const {
  takeTransactionData,
  openEditModal,
  closeEditModal,
  openAddModal,
  closeAddModal,
  addEditId,
} = modalsSlice.actions;

// Селектори
export const selectTransaction = (state) => state.modals.transaction;
export const selectIsEditModalOpen = (state) => state.modals.isEditModalOpen;
export const selectIsAddModalOpen = (state) => state.modals.isAddModalOpen;
export const selectIsEditID = (state) => state.modals.isEditId;
