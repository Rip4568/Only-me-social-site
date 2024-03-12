import { NextFunction, Request, Response } from "express";
import { HttpMethod, requestMethodAccept } from "../../middlewares/requestMethodAccept.middleware";

export function userFindManyService(request: Request, response: Response, next: NextFunction) {
    try {
        requestMethodAccept(HttpMethod.GET)(request, response, next);
        return response.json({"message": "get one user from service", "method":request.method})
    } catch (error) {
        return response.json({error})
    }
}