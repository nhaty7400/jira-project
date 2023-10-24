import { createSlice } from "@reduxjs/toolkit";

type TState = {
  visible: boolean;
  projectValue: any;
};

const initialState: TState = {
  visible: false,
  projectValue: {
    id: 0,
    projectName: "string",
    creator: 0,
    description: "string",
    categoryId: "string"
  },
};

const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    openDrawer: (state,action) => {
      state.visible = true;
      state.projectValue=action.payload;
    },
    closeDrawer: (state) => {
      state.visible = false;
    },

  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
