import { baseURL } from "../baseURL";
import { fetcher } from './fetcher';

class SchoolDayService {
    async all() {
        const response = await fetcher(`${baseURL}/schooldays`, { method: "GET" });
        return await response.json();
    }
}

export const schooldayService = new SchoolDayService();
