import { createSlice } from "@reduxjs/toolkit";

interface IWindow {
  shownWindow: "Doc" | "Test" | "Discussion" | "Folder" | null;
}

const initialState: IWindow = {
  shownWindow: null,
};

export const itemCreationWindowSlice = createSlice({
  name: "showWindow",
  initialState,
  reducers: {
    setShownWindow: (state, action) => {
      state.shownWindow = action.payload;
    },
    hideWindow: (state) => {
      state.shownWindow = null;
    },
  },
});

export const { hideWindow, setShownWindow } = itemCreationWindowSlice.actions;

export default itemCreationWindowSlice.reducer;
