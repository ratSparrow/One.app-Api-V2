
import { Types } from 'mongoose';
import { UserName } from "../../../interfaces/common";

export type PerformanceReview = {
    id: number;
    rating: number;
    customer:Types.ObjectId;
    feedback: string;
    reviewDate: Date;
}
export type IEmployee = {
    id: number;
    name:UserName
    email: string;
    phone:string
    branch: string;
    role: "Employee"; 
    hireDate: Date;
    salary: number;
    photo?:string;
    performanceReviews: PerformanceReview[]; 
}
