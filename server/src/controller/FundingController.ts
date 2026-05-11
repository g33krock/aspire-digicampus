import { NextFunction, Request, Response } from "express";
import { Funding } from "../entity/Funding";

export class FundingController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Funding.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Funding.findOne({ where: { id: parseInt(request.params.id) }, relations: ["student"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Funding.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let fundingToRemove = await Funding.findOneBy({ id: parseInt(request.params.id) });
		await Funding.remove(fundingToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const funding = await Funding.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(funding, data);
		return funding.save();
	}

}