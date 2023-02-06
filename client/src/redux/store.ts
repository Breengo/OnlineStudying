import isAuthSlice from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import teachersSlice from "./thunks/fetchTeachers";
import groupsSlice from "./thunks/fetchGroups";
import subjectSlice from "./thunks/fetchSubjects";
import subjectInfoSlice from "./thunks/fetchSubjectInfo";

export const store = configureStore({
  reducer: {
    auth: isAuthSlice,
    teacherList: teachersSlice,
    groupList: groupsSlice,
    subjectList: subjectSlice,
    subjectInfo: subjectInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
