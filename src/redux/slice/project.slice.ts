import { createSlice } from "@reduxjs/toolkit";

type TState = {
  listProject: any[];
};

const initialState:TState = {
  listProject: [],
};

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    setListProject: (state, action) => {
      state.listProject = action.payload;
    },
  },
});

export const { setListProject } = projectSlice.actions;

export default projectSlice.reducer;
