import {Request} from 'express'

export interface AuthRequest extends Request{
    username?:string,
    roles?: Role[]
}

export enum Role {
    USER= 'user',
    ADMIN = 'admin',
    LIBRARIAN = 'librarian',
    ROOT_ADMIN = 'owner',
    PREMIUM_USER = 'premium_user',
}

export const Limits_Requests= {
    USER: 10,
};