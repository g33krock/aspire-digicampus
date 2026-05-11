import { NextFunction, Request, Response } from "express";
import { InstructionMode } from "../entity/InstructionMode";

export class InstructionModeController {

	async all(request: Request, response: Response, next: NextFunction) {
		return InstructionMode.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return InstructionMode.findOne({ where: { id: parseInt(request.params.id) }, relations: ["student"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return InstructionMode.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let fundingToRemove = await InstructionMode.findOneBy({ id: parseInt(request.params.id) });
		await InstructionMode.remove(fundingToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const instructionmode = await InstructionMode.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(instructionmode, data);
		return instructionmode.save();
	}

}