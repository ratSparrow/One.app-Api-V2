
import { Model, Types } from 'mongoose';
import { UserName } from "../../../interfaces/common";

export type PerformanceReview = {
    id: number;
    rating: number;
    customer:Types.ObjectId;
    feedback: string;
    reviewDate: Date;
}
export type IEmployee = {
    id: string;
    name:UserName
    email: string;
    phone:string
    branch: Types.ObjectId | string;
    role: "Employee"; 
    hireDate: Date;
    salary: number;
    photo?:string;
    performanceReviews?: PerformanceReview[]; 
}

export type UserModel = Model<IEmployee, object>