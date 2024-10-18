import mongoose, { Schema, Document, Types, model } from 'mongoose';
import { IEmployee } from './employee.interface';

// Define the IEmployee schema
const EmployeeSchema: Schema = new Schema<IEmployee>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
        middleName: { type: String, required: false },
    },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    branch: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Branch" },
    role: { type: String, enum: ['Employee'], required: true },
    hireDate: { type: Date, required: true },
    salary: { type: Number, required: true },
    photo: { type: String },
    performanceReviews: [
        {
            rating: { type: Number, required: true },
            customer: { type: Types.ObjectId, ref: 'Customer', required: true }, // Assuming a Customer model
            feedback: { type: String, required: true },
            reviewDate: { type: Date, required: true },
        }
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});


export const Employee = model('employee', EmployeeSchema);


