import { NextFunction, Request, Response } from "express";
import { TallyResponse } from "../entity/TallyResponse";

export class TallyResponseController {

	async all(request: Request, response: Response, next: NextFunction) {
		return TallyResponse.find({ relations: ["students", "teachers"], where:{students:request.query.studentsId} });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return TallyResponse.findOne({ where: { id: parseInt(request.params.id) }, relations: ["student", "teacher"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return TallyResponse.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let tallyResponseToRemove = await TallyResponse.findOneBy({ id: parseInt(request.params.id) });
		await TallyResponse.remove(tallyResponseToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const tallyResponse = await TallyResponse.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(tallyResponse, data);
		return tallyResponse.save();
	}

}