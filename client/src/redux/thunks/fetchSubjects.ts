import { IUserData } from "./fetchTeachers";
import { IGroupData } from "./fetchGroups";
import axios from "../../axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchSubject = createAsyncThunk("subjects/fetchSubjects", async () => {
  const res = await axios.get(`/subject/getAll`);
  return res.data;
});

interface ISubjectData {
  subjectName: string;
  groups: IGroupData[];
  teachers: IUserData[];
  _id: string;
}

interface IFetchTeachersState {
  subjectList: ISubjectData[];
}

const initialState: IFetchTeachersState = {
  subjectList: [],
};

const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubject.fulfilled, (state, { payload }) => {
      state.subjectList = payload;
    });
  },
});

export { fetchSubject };

export default subjectsSlice.reducer;
