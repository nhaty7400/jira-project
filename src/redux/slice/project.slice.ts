import { createSlice } from "@reduxjs/toolkit";

type TState = {
  listProject: any[];
  projectCategoryArr:any[];
};

const initialState:TState = {
  listProject: [],
  projectCategoryArr:[],
};

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    setListProject: (state, action) => {
      state.listProject = action.payload;
    },
    setprojectCategoryArr:(state,action)=>{
      state.projectCategoryArr=action.payload;
    }
  },
});

export const { setListProject,setprojectCategoryArr } = projectSlice.actions;

export default projectSlice.reducer;
