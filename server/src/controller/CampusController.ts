import { NextFunction, Request, Response } from "express";
import { Campus } from "../entity/Campus";

export class CampusController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Campus.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Campus.findOne({ where: { id: parseInt(request.params.id) }, relations: ["school_admin"] });
	}

	async save(request: Request, response: Response, next: NextFunction) {
		return Campus.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		const studentToRemove = await Campus.findOneBy({ id: parseInt(request.params.id) });
		await Campus.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await Campus.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}

}