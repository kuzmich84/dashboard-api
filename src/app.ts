import express, {Express} from "express"
import {Server} from "http"
import {LoggerService} from "./logger/loger.service";
import {UsersController} from "./users/users.controller";

export class App {
    app: Express
    server: Server
    port: number
    logger: LoggerService
    usersController: UsersController


    constructor(
        logger: LoggerService,
        usersController: UsersController) {
        this.app = express()
        this.port = 8000
        this.logger = logger
        this.usersController = usersController

    }


    useRoutes() {
        this.app.use('/users', this.usersController.router)
    }

    useExceptionFilters() {

    }


    public async init() {
        this.useRoutes()
        this.useExceptionFilters()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на ${this.port} порту`);
    }
}