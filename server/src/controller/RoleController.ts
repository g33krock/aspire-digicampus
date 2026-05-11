import { NextFunction, Request, Response } from "express";
import { Role } from "../entity/Role";

export class RoleController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Role.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Role.findOne({ where: { id: parseInt(request.params.id) }, relations: ["teacher"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Role.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentToRemove = await Role.findOneBy({ id: parseInt(request.params.id) });
		await Role.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await Role.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}

}