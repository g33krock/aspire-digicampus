import { baseURL } from "../baseURL";
import { fetcher } from './fetcher';

class AttendanceService {
    async all() {
        const response = await fetcher(`${baseURL}/attendance`, { method: "GET" });
        return await response.json();
    }
}

export const attendanceService = new AttendanceService();
