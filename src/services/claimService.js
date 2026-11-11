import api from "./api";

export const getClaims = () => {
  return api.get("/claims");
};

export const createClaim = (data) => {
  return api.post("/claims", data);
};

export const getClaim = (id) => {
  return api.get(`/claims/${id}`);
};

export const approveClaim = (id) => {
  return api.patch(`/claims/${id}/approve`);
};

export const rejectClaim = (id) => {
  return api.patch(`/claims/${id}/reject`);
};
