import { NextFunction, Request, Response } from "express";
import { Guardian } from "../entity/Guardian";

export class GuardianController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Guardian.find({ relations: ["student"] });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Guardian.findOne({ where: { id: parseInt(request.params.id) }, relations: ["student"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Guardian.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentToRemove = await Guardian.findOneBy({ id: parseInt(request.params.id) });
		await Guardian.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await Guardian.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}

}