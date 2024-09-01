import { getPayload as rootGetPayload } from "payload";
import configPromise from "./payload.config";

export const getPayload = async () => {
  const payload = await rootGetPayload({
    config: configPromise,
  });
  return payload;
};
