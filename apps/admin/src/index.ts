import configPromise from "./payload.config";
import { getPayload as rootGetPayload } from "payload";

export const getPayload = async () => {
  const payload = await rootGetPayload({
    config: configPromise,
  });
  return payload;
};
