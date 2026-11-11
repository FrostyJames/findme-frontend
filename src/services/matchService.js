import api from "./api";

export const getMatches = () => {
  return api.get("/matches");
};

export const getMatch = (id) => {
  return api.get(`/matches/${id}`);
};

export const verifyMatch = (id) => {
  return api.patch(`/matches/${id}/verify`);
};