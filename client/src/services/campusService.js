import { baseURL } from "../baseURL";
import { fetcher } from './fetcher';

class CampusService {
    async all() {
        const response = await fetcher(`${baseURL}/campuses`, { method: "GET" });
        return await response.json();
    }
}

export const campusService = new CampusService();
