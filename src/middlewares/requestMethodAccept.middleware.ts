import { NextFunction, Request, Response } from "express";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface IMethod {
  method: HttpMethod;
}

export function requestMethodAccept(method: HttpMethod) {
  return function (request: Request, response: Response, next: NextFunction) {
    if (request.method === method) {
      next();
    } else {
      response.status(405).json({
        error: "method not allowed",
      });
    }
  };
}
