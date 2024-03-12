import yup from 'yup'
export interface IUser {
    id?: number,
    username: string,
    password: string,
    email: string,
    name?: string
}

export const userSchema = yup.object().shape({
    username: yup.string().required().max(128).min(2),
    password: yup.string().required().max(255).min(2),
    email: yup.string().email().required().max(128),
    name: yup.string().max(255)
})