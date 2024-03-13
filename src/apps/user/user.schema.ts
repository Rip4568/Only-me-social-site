import * as yup from "yup";

export interface IUser {
  id?: number;
  username: string;
  password: string;
  is_root?: string;
  email: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const userSchema = yup.object().shape({
  username: yup.string().required().max(128).min(2),
  password: yup.string().required().max(255).min(2),
  email: yup.string().email().required().max(128),
  name: yup.string().max(255),
  //data que não deve ser atualizado ou criado
  is_root: yup.boolean().notRequired(),
  id: yup.number().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});
