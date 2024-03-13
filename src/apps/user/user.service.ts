import { NextFunction, Request, Response } from "express";
import { HttpMethod, requestMethodAccept } from "../../middlewares/requestMethodAccept.middleware";
import { PrismaClient } from "@prisma/client";
import { IUser, userSchema } from "./user.schema";

const prisma = new PrismaClient();
export async function userFindManyService(request: Request, response: Response, next: NextFunction) {
    try {
        const users = await prisma.user.findMany();
        return response.json({users}).status(200);
    } catch (error) {
        return response.json({error}).status(500);
    }
}


export async function userFindOneService(request: Request, response: Response, next: NextFunction) {
    try {
        const { id } = request.params;
        const user = await prisma.user.findUnique({
            where: { id: Number(id) }
        })
        return response.json({user})
    } catch (error) {
        return response.json({error}).status(500);
    }
}

export async function userCreateService(request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
        const userData:IUser = request.body;
        const userDataValidated = await userSchema.validate(userData, {abortEarly: false});
        const { id, createdAt, updatedAt, is_root, ...secureUserData } = userDataValidated;
        const userCreated = await prisma.user.create({
            data: { ...secureUserData }
        })
        return response.json({
            message: "usuario criado com sucesso",
            userCreated
        }).status(201);
    } catch (error) {
        console.log("error", error);
        return response.json({error}).status(500);
    }
}

export async function userUpdateService(request: Request, response: Response, next: NextFunction) {
    try {
        const idParams  = Number(request.params.id);
        const user = await prisma.user.findUnique({
            where: { id: idParams }
        })
        if(!user) {
            return response.json({message: "Usuario não encontrado"}).status(404);
        }
        const userData:IUser = request.body;
        const userDataValidated = await userSchema.validate(userData, {abortEarly: false});
        const { id, createdAt, updatedAt, is_root, ...secureUserData } = userDataValidated;
        const userUpdtaed = await prisma.user.update({
            where: { id: user.id },
            data: { ...secureUserData }
        })
        return response.json({ userUpdtaed })
    } catch (error) {
        return response.json({error}).status(500);
    }
}

export async function userDeleteService(request: Request, response: Response, next: NextFunction) {
    try {
        const { id } = request.params;
        const userDeleted = await prisma.user.delete({
            where: { id: Number(id) }
        })
        return response.json({userDeleted}).status(200);
    } catch (error) {
        return response.json({error}).status(500);
    }
}