import { NextFunction, Request, Response } from "express";
import { StudentTimeCard } from "../entity/StudentTimeCard";

export class StudentTimeCardController {

	async all(request: Request, response: Response, next: NextFunction) {
		return StudentTimeCard.find({ relations: ["student"] });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return StudentTimeCard.findOne({ where: { id: parseInt(request.params.id) }, relations: ["student"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return StudentTimeCard.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentTimecardToRemove = await StudentTimeCard.findOneBy({ id: parseInt(request.params.id) });
		await StudentTimeCard.remove(studentTimecardToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const stimecard = await StudentTimeCard.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(stimecard, data);
		return stimecard.save();
	}

}