import { axiosWithAuth } from "./config.service";

export const getUser=async(keyword:string)=>{
    try{
        const resp = await axiosWithAuth(`/Users/getUser?keyword=${keyword}`);

    return resp.data;
    }catch(err){
        console.log(err);
    }
}