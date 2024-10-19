import { Model, Types } from "mongoose";
import { UserName } from "../../../interfaces/common";
import { IBranch } from "../branch/branch.interface";

export type IAdmin = {
    id: string,
    name:UserName
    email: string,
    phone:string
    branch: Types.ObjectId | IBranch,
    role: "Admin",
    hireDate: Date,
    salary: number,
    isAdmin: true,
    permissions: boolean
};

export type AdminModel = Model<IAdmin, object>