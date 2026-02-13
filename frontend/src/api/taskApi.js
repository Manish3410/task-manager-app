import axiosClint from "./axiosClint";

export const fetchTasksApi = async ({params}) => {
  const res = await axiosClint.get("/tasks", { params });
  return res.data;
};

export const createTasksApi = async (payload) => {
  const res = await axiosClint.post("/tasks",payload);
  return res.data;
};

export const fetchTaskByIdApi = async (id) => {
  const res = await axiosClint.get(`/tasks/${id}`,);
  return res.data;
};

export const updateTasksApi = async (id,payload) => {
  const res = await axiosClint.get(`/tasks/${id}`,payload);
  return res.data;
};

export const deleteTasksApi = async (id) => {
  const res = await axiosClint.get(`/tasks/${id}`);
  return res.data;
};