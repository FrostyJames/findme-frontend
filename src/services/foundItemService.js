import api from "./api";

export const getFoundItems = () => {
  return api.get("/found-items");
};

export const getFoundItem = (id) => {
  return api.get(`/found-items/${id}`);
};

export const createFoundItem = (data) => {
  return api.post("/found-items", data);
};

export const updateFoundItem = (id, data) => {
  return api.put(`/found-items/${id}`, data);
};

export const deleteFoundItem = (id) => {
  return api.delete(`/found-items/${id}`);
};