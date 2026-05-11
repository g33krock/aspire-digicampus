import { NextFunction, Request, Response } from "express";
import { Transcript } from "../entity/Transcript";

export class StudentTranscriptController {

    async all(request: Request, response: Response, next: NextFunction) {
        return Transcript.find({ relations: ["student", "schedules", "campus"], where:{ student: { id: parseInt(request.query.studentId as string) } } });
    }

}