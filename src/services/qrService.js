import api from "./api";

export const generateQr = (itemId) => {
  return api.post("/qr/generate", {
    item_id: itemId,
  });
};