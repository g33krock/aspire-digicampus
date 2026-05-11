import * as dotenv from 'dotenv';
dotenv.config();
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { supabase } from './utils/supabaseClient';

const cors = require('cors');
const port = process.env.PORT || 5000;

AppDataSource.initialize().then(async () => {

	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use(express.static("../client/build"));
	app.use(async (req, res, next) => {
		const bearer = req.headers.authorization;
		if (!bearer) {
			return res.status(401).send();
		}
		const token = bearer.replace('Bearer ', '');
		const { data: { user }, error } = await supabase.auth.getUser(token);
		user ? next() : res.status(401).send();
	});

	Routes.forEach(route => {
		(app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
			const result = (new (route.controller as any))[route.action](req, res, next);
			if (result instanceof Promise) {
				result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
			} else if (result !== null && result !== undefined) {
				res.json(result);
			}
		});
	});

	app.listen(port);
	console.log(`Express server has started on port ${port}.`);

}).catch(error => console.log(error));
