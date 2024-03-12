import { NextFunction, Request, Response } from "express";
import { HttpMethod, requestMethodAccept } from "../../middlewares/requestMethodAccept.middleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export function userFindManyService(request: Request, response: Response, next: NextFunction) {
    try {
        requestMethodAccept(HttpMethod.GET)(request, response, next);
        return response.json({"message": "get many users from service", "method":request.method})
    } catch (error) {
        return response.json({error}).status(500);
    }
}


export function userFindOneService(request: Request, response: Response, next: NextFunction) {
    try {
        requestMethodAccept(HttpMethod.GET)(request, response, next);
        return response.json({"message": "get one user from service", "method":request.method})
    } catch (error) {
        return response.json({error}).status(500);
    }
}

export function userCreateService(request: Request, response: Response, next: NextFunction) {
    try {
        requestMethodAccept(HttpMethod.POST)(request, response, next);
        return response.json({"message": "create an user from service", "method":request.method})
    } catch (error) {
        return response.json({error}).status(500);
    }
}

export function userUpdateService(request: Request, response: Response, next: NextFunction) {
    try {
        requestMethodAccept(HttpMethod.PUT)(request, response, next);
        return response.json({"message": "update an user from service", "method":request.method})
    } catch (error) {
        return response.json({error}).status(500);
    }
}

export function userDeleteService(request: Request, response: Response, next: NextFunction) {
    try {
        requestMethodAccept(HttpMethod.DELETE)(request, response, next);
        return response.json({"message": "delete an user from service", "method":request.method})
    } catch (error) {
        return response.json({error}).status(500);
    }
    
}