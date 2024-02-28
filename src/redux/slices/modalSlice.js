import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: true,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen(state) {
            state.isModalOpen = true;
        },
        setModalClose(state){
            state.isModalOpen = false;
        }
    }
});

export const selectIsModalOpen = (state) => state.modal.isModalOpen;
export const { setModalClose, setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;