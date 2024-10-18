import { Model, Types } from 'mongoose'
import { ICustomer } from '../customer/customer.interface'
import { IEmployee } from '../employee/employee.interface'
import { IAccountant } from '../accountant/accountant.interface'
import { IAdmin } from '../admin/admin.interface'
export type IUser = {
    id: string
    role: string
    password: string
    customer?: Types.ObjectId | ICustomer
    employee?: Types.ObjectId | IEmployee
    accountant?: Types.ObjectId | IAccountant
    admin?: Types.ObjectId | IAdmin
    superAdmin?: Types.ObjectId
}

export type UserModel = Model<IUser, object>
