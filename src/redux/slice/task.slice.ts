import { createSlice } from "@reduxjs/toolkit";

type TState = {
    taskTypeArr:any[];
    taskStatusArr:any[];
    taskPriorityArr:any[];
    asigneesArr:any[];
};

const initialState:TState = {
    taskTypeArr:[],
    taskStatusArr:[],
    taskPriorityArr:[],
    asigneesArr:[],
    
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setType:(state,action)=>{
      state.taskTypeArr=action.payload;
    },
    setStatus:(state,action)=>{
      state.taskStatusArr=action.payload;
    },
    setPriority:(state,action)=>{
      state.taskPriorityArr=action.payload;
    },
    addAsignees:(state,action)=>{
      state.asigneesArr.push(action.payload);
    },
    deleteAsigness:(state)=>{
      state.asigneesArr=[];
    }
  },
});

export const {deleteAsigness,setType,setStatus,setPriority,addAsignees} = taskSlice.actions;

export default taskSlice.reducer;