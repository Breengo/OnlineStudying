import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  isAuth: boolean;
}

const initialState: IAuth = {
  isAuth: false,
};

export const isAuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = isAuthSlice.actions;

export default isAuthSlice.reducer;
