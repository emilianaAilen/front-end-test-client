import { endpoints } from "./endpoints";
import { fetchEndpoint } from "../../common/utils/services";

export const getItemsData = async (query) => {
  try {
    const response = await fetchEndpoint(endpoints.getItems(query), "GET");
    if (!response.ok) {
      throw new Error("Error while searching products.");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
