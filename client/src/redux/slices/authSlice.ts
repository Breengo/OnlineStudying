import { createSlice } from "@reduxjs/toolkit";

interface IUserData {
  role: string;
  email: string;
  userName: string;
}

interface IAuth {
  isAuth: boolean;
  data: IUserData | null;
}

const initialState: IAuth = {
  isAuth: false,
  data: null,
};

export const isAuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.data = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.data = null;
    },
  },
});

export const { login, logout } = isAuthSlice.actions;

export default isAuthSlice.reducer;
