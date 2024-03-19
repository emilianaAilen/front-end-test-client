import { endpoints } from "./endpoints";
import { fetchEndpoint } from "../../common/utils/services";

export const getItemDetail = async (id) => {
  try {
    const response = await fetchEndpoint(endpoints.getItemDetail(id), 'GET');
    if (!response.ok) {
      throw new Error("Error while getting item detail.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};