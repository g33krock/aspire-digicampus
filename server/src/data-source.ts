import "reflect-metadata";
import { DataSource } from "typeorm";
import { Announcement } from "./entity/Announcement";
import { Attendance } from "./entity/Attendance";
import { Campus } from "./entity/Campus";
import { Course } from "./entity/Course";
import { District } from "./entity/District";
import { FinalGrade } from "./entity/FinalGrade";
import { Funding } from "./entity/Funding";
import { Gradebook } from "./entity/Gradebook";
import { Guardian } from "./entity/Guardian";
import { Incident } from "./entity/Incident";
import { InstructionMode } from "./entity/InstructionMode";
import { RelatedService } from "./entity/RelatedService";
import { RelatedServiceRole } from "./entity/RelatedServiceRole";
import { Role } from "./entity/Role";
import { Schedule } from "./entity/Schedule";
import { SchoolDay } from "./entity/SchoolDay";
import { School_Admin } from "./entity/School_Admin";
import { SessionInfo } from "./entity/SessionInfo";
import { SpedQuestion } from "./entity/SpedQuestion";
import { SpedResponse } from "./entity/SpedResponse";
import { StaffAttendance } from "./entity/StaffAttendance";
import { Student } from "./entity/Student";
import { StudentAttendance } from "./entity/StudentAttendance";
import { StudentTimeCard } from "./entity/StudentTimeCard";
import { TallyQuestion } from "./entity/TallyQuestion";
import { TallyResponse } from "./entity/TallyResponse";
import { Teacher } from "./entity/Teacher";
import { TimeCard } from "./entity/TimeCard";
import { Tracker } from "./entity/Tracker";
import { Transcript } from "./entity/Transcript";
import { User } from "./entity/User";
import { Video } from "./entity/Video";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE !== "false",
    logging: process.env.DB_LOGGING === "true",
    ssl: process.env.DB_SSL !== "false" ? { rejectUnauthorized: false } : false,
    entities: [
        Announcement, Attendance, Campus, Course, District, FinalGrade,
        Funding, Gradebook, Guardian, Incident, InstructionMode,
        RelatedService, RelatedServiceRole, Role, Schedule, SchoolDay,
        School_Admin, SessionInfo, SpedQuestion, SpedResponse, StaffAttendance,
        Student, StudentAttendance, StudentTimeCard, TallyQuestion, TallyResponse,
        Teacher, TimeCard, Tracker, Transcript, User, Video
    ],
});
