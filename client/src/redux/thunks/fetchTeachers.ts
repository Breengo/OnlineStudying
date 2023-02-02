import axios from "../../axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchTeachers = createAsyncThunk("users/fetchTeachers", async () => {
  const res = await axios.get(`/user/getByRole?role=Teacher`);
  return res.data;
});

export interface IUserData {
  userName: string;
  role: "Teacher" | "Student" | "Deanery";
  email: string;
  id: string;
}

interface IFetchTeachersState {
  teacherList: IUserData[];
}

const initialState: IFetchTeachersState = {
  teacherList: [],
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.fulfilled, (state, { payload }) => {
      state.teacherList = payload;
    });
  },
});

export { fetchTeachers };

export default teachersSlice.reducer;
