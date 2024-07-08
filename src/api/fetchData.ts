import { Brewery } from "../types/brewey";
import { URL_ALL_DATA } from "./constants";

// functions are always with lower case
export async function fetchData(): Promise<Brewery> {
    //  use async/await
    try {
        const res = await fetch(URL_ALL_DATA);
        if (!res.ok) {
            throw new Error(
                `Response status: ${res.status}`
            );
        }
        const json = await res.json();
        console.log(`JSON`,json);
        return json
        
    } catch (error) {
        console.error(`Failed to fetch data: `, error);
        return Promise.reject(error)
    }
}