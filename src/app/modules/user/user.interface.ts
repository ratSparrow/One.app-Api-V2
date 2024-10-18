import { Model, Types } from 'mongoose'
export type IUser = {
    id: string
    role: string
    password: string
    customer?: Types.ObjectId
    employee?: Types.ObjectId
    accountant?: Types.ObjectId
    admin?: Types.ObjectId
    superAdmin?: Types.ObjectId
}

export type UserModel = Model<IUser, object>
