import { NextFunction, Request, Response } from "express";
import { Gradebook } from "../entity/Gradebook";

export class GradebookController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Gradebook.find({ relations: ["schedules", "teachers", "students", "courses", "campus"] });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Gradebook.findOne({ where: { id: parseInt(request.params.id) }, relations: ["schedules"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Gradebook.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let gradebookToRemove = await Gradebook.findOneBy({ id: parseInt(request.params.id) });
		await Gradebook.remove(gradebookToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const gradebook = await Gradebook.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(gradebook, data);
		return gradebook.save();
	}

}