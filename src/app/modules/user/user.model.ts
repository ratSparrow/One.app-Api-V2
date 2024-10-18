import mongoose, { model, Schema } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const UserSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Customer', 'Employee', 'Accountant', 'Admin', 'SuperAdmin']
    },
    password: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: false,
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: false,
    },
    accountant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accountant',
        required: false,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: false,
    },
    superAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SuperAdmin',
        required: false,
    },

},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    });

    export const User = model<IUser, UserModel>('User', UserSchema)
