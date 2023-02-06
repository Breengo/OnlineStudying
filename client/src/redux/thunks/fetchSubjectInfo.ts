import axios from "../../axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserData } from "./fetchTeachers";

const fetchSubjectInfo = createAsyncThunk(
  "subjects/fetchSubjectInfo",
  async (subjectID: string) => {
    const res = await axios.get(`/subject/getById?subjectID=${subjectID}`);
    return res.data;
  }
);

export interface IItemInfo {
  itemType: "document" | "video" | "discussion" | "test";
  itemName: string;
  _id: string;
  number: number;
}

export interface IModuleInfo {
  moduleName: string;
  itemList: IItemInfo[];
  _id: string;
}

interface ISubjectInfo {
  createdAt: string;
  groups: string[];
  moduleList: IModuleInfo[];
  subjectName: string;
  headerText: string;
  teacher: IUserData;
}

interface IFetchSubjectInfo {
  subjectInfo: ISubjectInfo | null;
}

const initialState: IFetchSubjectInfo = {
  subjectInfo: null,
};

const subjectInfoSlice = createSlice({
  name: "subjectInfo",
  initialState,
  reducers: {
    clearSubjectInfo: (state) => {
      state.subjectInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubjectInfo.fulfilled, (state, { payload }) => {
      state.subjectInfo = payload;
    });
  },
});

export { fetchSubjectInfo };

export const { clearSubjectInfo } = subjectInfoSlice.actions;

export default subjectInfoSlice.reducer;
