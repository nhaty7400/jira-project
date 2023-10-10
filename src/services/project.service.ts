import { axiosWithoutAuth } from "./config.service";

export const getAllProject = async () => {
  try {
    const resp = await axiosWithoutAuth("/Project/getAllProject");

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

