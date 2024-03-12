import { Router } from "express";
import {
  userCreateController,
  userDeleteController,
  userFindManyController,
  userFindOneController,
  userUpdateController,
} from "../apps/user/user.controller";

const userRouter = Router();
userRouter.get("/user:id", userFindOneController);
userRouter.get("/user", userFindManyController);
userRouter.delete("/user:id", userDeleteController);
userRouter.post("/user", userCreateController);
userRouter.put("/user:id", userUpdateController);

export { userRouter };
