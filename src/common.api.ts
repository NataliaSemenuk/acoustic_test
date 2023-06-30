import { API_PATH, BASE_URL } from "./common.constant";
import { IData } from "./common.interface";

export const fetchData = async (): Promise<{ data: IData | null, isError: boolean }> => {
    try {
        const response = await fetch(BASE_URL + API_PATH);

        if (!response.ok) {
            throw new Error("Network response was not OK! Status code: " + response.status);
        }

        const data = await response.json();
        
        return {
            data: data.elements,
            isError: false
        };
    } catch (error) {
        console.error(error);

        return {
            data: null,
            isError: true
        };
    }

}