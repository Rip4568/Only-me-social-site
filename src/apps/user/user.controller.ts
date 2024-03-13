import { NextFunction, Request, Response } from "express";
import { userCreateService, userDeleteService, userFindManyService, userFindOneService, userUpdateService } from "./user.service";

export function userCreateController(request: Request, response: Response, next: NextFunction) {
  try {
    return userCreateService(request, response, next);
  } catch (error) {
    response.json({ error: error }).status(500);
  }
}

export function userFindOneController(request: Request, response: Response, next: NextFunction) {
  try {
    return userFindOneService(request, response, next);
  } catch (error) {
    return response.json({error}).status(500);
  }
}

export function userFindManyController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  return userFindManyService(request, response, next);
}

export function userDeleteController(request: Request, response: Response, next: NextFunction) {
  try {
    return userDeleteService(request, response, next);
  } catch (error) {
    return response.json({error}).status(500);
  }
}

export function userUpdateController(request: Request, response: Response, next: NextFunction) {
  try {
    return userUpdateService(request, response, next);
  } catch (error) {
    return response.json({error}).status(500);
  }
}
