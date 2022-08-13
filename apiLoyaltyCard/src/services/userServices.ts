import { User } from "@prisma/client";
import { faker } from '@faker-js/faker';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import userRepository from "../repositories/userRepository.js";

export type CreateUserData = Omit<User, "id"|"createdAt"|"updatedAt">;
export type UserData = Omit<User, "id"|"createdAt"|"updatedAt"|"code"|"isAdmin">;
export type CreateUserTestData = Omit<User, "id"|"isAdmin"|"createdAt"|"updatedAt"|"code">;

async function insert(user: UserData) {
    user.password = bcrypt.hashSync(user.password, 10);
    const code = faker.random.alphaNumeric(4);
    await userRepository.insert({...user, code, isAdmin: false});
}

async function findById(id: number){
    const user = await userRepository.findById(id);
    if(!user) throw { type: "not_found"};
    return user;
}

async function findByCode(code: string){
    const user = await userRepository.findByCode(code);
    if(!user) throw { type: "not_found"};
    return user;
}

async function findByEmail(email: string){
    const user = await userRepository.findByEmail(email);
    if(!user) throw { type: "not_found"};
    return user;
}

async function findByEmailAndPassword(email: string, password: string){

    const user = await userRepository.findByEmail(email);
    const key = process.env.TOKEN_KEY;
    
    if(!user) throw { type: "not_found"};
    const token = jwt.sign(user.id, key);

    if(!bcrypt.compareSync(password, user.password)) throw { type: "unauthorized"};

    
    return { token, code: user.code, name: user.name};
}


export default {
    insert,
    findById,
    findByEmail,
    findByCode,
    findByEmailAndPassword
}