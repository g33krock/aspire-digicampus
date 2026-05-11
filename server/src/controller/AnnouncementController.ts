import { NextFunction, Request, Response } from "express";
import { Announcement } from "../entity/Announcement";

export class AnnouncementController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Announcement.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Announcement.findOneBy({ id: parseInt(request.params.id) });
	}

	async save(request: Request, response: Response, next: NextFunction) {
		return Announcement.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		const announcementToRemove = await Announcement.findOneBy({ id: parseInt(request.params.id) });
		await Announcement.remove(announcementToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const announcement = await Announcement.findOneBy({ id: parseInt(request.params.id) });
		const data = request.body;
		Object.assign(announcement, data);
		return announcement.save();
	}

}