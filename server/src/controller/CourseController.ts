import { NextFunction, Request, Response } from "express";
import { Course } from "../entity/Course";

export class CourseController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Course.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Course.findOne({ where: { id: parseInt(request.params.id) }, relations: ["schedule"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Course.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentToRemove = await Course.findOneBy({ id: parseInt(request.params.id) });
		await Course.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await Course.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}

}