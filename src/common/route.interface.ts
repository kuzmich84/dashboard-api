import {NextFunction, Request, Response, Router} from "express";

export interface IControllerRoute {
    path: string,
    func: (req: Request, response: Response, next: NextFunction) => void,
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>,
}