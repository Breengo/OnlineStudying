import axios from "../../axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchGroups = createAsyncThunk("groups/fetchGroups", async () => {
  const res = await axios.get("/group/getAll");
  return res.data;
});

export interface IGroupData {
  groupNumber: string;
}

interface IFetchGroupsState {
  groupList: IGroupData[];
}

const initialState: IFetchGroupsState = {
  groupList: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGroups.fulfilled, (state, { payload }) => {
      state.groupList = payload;
    });
  },
});

export { fetchGroups };

export default groupsSlice.reducer;
