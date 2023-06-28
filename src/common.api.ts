import { API_PATH, BASE_URL } from "./common.constant";
import { IData } from "./common.type";

export const fetchData = async (): Promise<IData | null> => {
    try {
        const response = await fetch(BASE_URL + API_PATH);
        const data = await response.json();

        return data.elements;
    } catch (error) {
        console.error('Something went wrong!', error);

        return null;
    }

}