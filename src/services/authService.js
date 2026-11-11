import api from "./api";

export const register = (data) => {
  return api.post("/register", data);
};

export const login = (data) => {
  return api.post("/login", data);
};

export const logout = () => {
  return api.post("/logout");
};

export const getProfile = () => {
  return api.get("/profile");
};

