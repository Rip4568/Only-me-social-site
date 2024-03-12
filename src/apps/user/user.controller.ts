import { NextFunction, Request, Response } from "express";
import { userFindManyService } from "./user.service";

export function userCreateController(request: Request, response: Response) {
  try {
    return response.json({ message: "create an user" }).status(201);
  } catch (error) {
    response.json({ error: error }).status(500);
  }
}

export function userFindOneController(request: Request, response: Response) {
  return "get one user";
}

export function userFindManyController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  return userFindManyService(request, response, next);
}

export function userDeleteController(request: Request, response: Response) {
  return "delete an user";
}

export function userUpdateController(request: Request, response: Response) {
  return "update an user";
}
