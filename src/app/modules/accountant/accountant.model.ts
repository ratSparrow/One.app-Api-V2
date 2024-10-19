import mongoose, { Schema } from "mongoose";
import { AccountantModel, IAccountant } from "./accountant.interface";



const AccountantSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ['Accountant'] },
    department: { type: String },
    experience: { type: Number, required: true },
    expertise: { type: [String], required: true },
    isCertified: { type: Boolean, required: true },
    certificationName: { type: String },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    photo: { type: String },

}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});

export const Accountant = mongoose.model<IAccountant, AccountantModel>('accountant', AccountantSchema);


