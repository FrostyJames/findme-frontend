import api from "./api";

export const getAnalytics = () => {
  return api.get("/analytics");
};

export const getRecoveryStats = () => {
  return api.get("/analytics/recovery");
};

export const getLocationStats = () => {
  return api.get("/analytics/locations");
};