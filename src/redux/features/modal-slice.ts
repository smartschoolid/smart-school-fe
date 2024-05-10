import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  open: boolean;
}

const initialState: ModalState = {
  open: true,
};

export const modalSlice = createSlice({
  name: "modal-slice",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
