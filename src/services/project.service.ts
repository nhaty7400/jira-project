import { axiosWithAuth, axiosWithoutAuth } from "./config.service";

export const getAllProject = async () => {
  try {
    const resp = await axiosWithoutAuth("/Project/getAllProject");

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProjectCategory = async () => {
  try {
    const resp = await axiosWithoutAuth("/ProjectCategory");

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const createProjectAuthorize=async(data:any)=>{
  try{
    const resp=await axiosWithAuth({
      method: "post",
      url: "/Project/createProjectAuthorize",
      data,
    });

    return resp.data;
  }catch(e){
    console.log(e);
  }
}

export const updateProject=async(data:any)=>{
  try{
    const resp=await axiosWithAuth({
      method: "put",
      url: "/Project/updateProject",
      data,
    });

    return resp.data;
  }catch(e){
    console.log(e);
  }
}

export const getProjectDetail = async (id:any) => {
  try {
    const resp = await axiosWithAuth(`/Project/getProjectDetail?id=${id}`);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
