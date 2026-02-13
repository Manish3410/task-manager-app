import axiosClint from "./axiosClint";

export const loginApi = async ({ email, password }) => {
  const res = axiosClint.post("/auth/login", { email, password });
  return res.data;
};

export const registerApi = async ({ name , email, password }) => {
  const res = axiosClint.post("/auth/register", { name ,email, password });
  return res.data;
};