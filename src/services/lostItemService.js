import api from "./api";

export const getLostItems = () => {
  return api.get("/lost-items");
};

export const getLostItem = (id) => {
  return api.get(`/lost-items/${id}`);
};

export const createLostItem = (data) => {
  return api.post("/lost-items", data);
};

export const updateLostItem = (id, data) => {
  return api.put(`/lost-items/${id}`, data);
};

export const deleteLostItem = (id) => {
  return api.delete(`/lost-items/${id}`);
};