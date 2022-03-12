import {NextFunction, Request, Response} from "express";
import {LoggerService} from "../logger/loger.service";

export class ExceptionFilter {
    logger: LoggerService

    constructor(logger: LoggerService) {
        this.logger = logger
    }


    catch(err: Error, req: Request, res: Response, next: NextFunction) {
        this.logger.error(`${err.message}`)

    }
}
