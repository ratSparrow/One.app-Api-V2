import mongoose, { model } from "mongoose";
import { CustomerModel, ICustomer } from "./customer.interface";

const CustomerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: false,
        },
        middleName: {
            type: String,
            required: false,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    photo: {
        type: String,
        required:false
    },
    address: {
        road: {
            type: String,
            required: false,
        },
        house: {
            type: String,
            required: false,
        },
        block: {
            type: String,
            required: false,
        },
        sector: {
            type: String,
            required: false,
        },
        village: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        }
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: false,
    }],
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BillingAddress',
        required: false,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShippingAddress',
        required: false,
    }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    });

export const Customer = model<ICustomer, CustomerModel>('customer', CustomerSchema);