import { axiosWithAuth, axiosWithoutAuth } from "./config.service";

export const getAllStatus = async () => {
    try {
      const resp = await axiosWithoutAuth("/Status/getAll");
  
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getPriority = async () => {
    try {
      const resp = await axiosWithoutAuth("/Priority/getAll?id=0");
  
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };


  export const getTaskType = async () => {
    try {
      const resp = await axiosWithoutAuth("/TaskType/getAll");
  
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const createTask=async(data:any)=>{
    try{
      const resp=await axiosWithAuth({
        method: "post",
        url: "/Project/createTask",
        data,
      });
  
      return resp.data;
    }catch(e){
      console.log(e);
    }
  }