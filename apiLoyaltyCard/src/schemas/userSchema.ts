import Joi from "joi";
import { CreateUserData } from "../services/userServices.js";

interface newUser extends CreateUserData{
    passwordConfirmation: string;
};

export const userSchema = Joi.object<newUser>({
    name: Joi.string().required(),
    email: Joi.string().email().required().empty(''),
    password: Joi.string().required().empty(''),
    passwordConfirmation: Joi.ref("password"),
});

export const loginSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});