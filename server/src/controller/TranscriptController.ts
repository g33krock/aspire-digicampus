import { NextFunction, Request, Response } from "express";
import { Transcript } from "../entity/Transcript";

export class TranscriptController {

    async all(request: Request, response: Response, next: NextFunction) {
        return Transcript.find({ relations: ["student", "schedules", "campus"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return Transcript.findOne({ where: { id: parseInt(request.params.id) }, relations: ["student", "schedules", "campus"] });
    }


    async save(request: Request, response: Response, next: NextFunction) {
        return Transcript.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let transcriptToRemove = await Transcript.findOneBy({ id: parseInt(request.params.id) });
        await Transcript.remove(transcriptToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const transcript = await Transcript.findOneBy({ id: parseInt(request.params.id) });
        const data = request.body;
        Object.assign(transcript, data);
        return transcript.save();
    }

}