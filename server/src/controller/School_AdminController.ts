import { NextFunction, Request, Response } from "express";
import { School_Admin } from "../entity/School_Admin";

export class School_AdminController {

	async all(request: Request, response: Response, next: NextFunction) {
		return School_Admin.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return School_Admin.findOne({ where: { id: parseInt(request.params.id) }, relations: ["campus"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return School_Admin.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentToRemove = await School_Admin.findOneBy({ id: parseInt(request.params.id) });
		await School_Admin.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await School_Admin.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}

}