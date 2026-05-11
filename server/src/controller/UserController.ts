import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    async all(request: Request, response: Response, next: NextFunction) {
        return User.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return User.findOneBy({ id: parseInt(request.params.id) });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return User.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await User.findOneBy({ id: parseInt(request.params.id) });
        await User.remove(userToRemove);
    }

}
