import { Model } from "mongoose";
import { UserName } from "../../../interfaces/common";


export type IOrder = {
    id: number;
    orderDate: Date;
    status: string; // Consider using an enum for order status
    totalPrice: number;
    items: OrderService[];
}

export type  OrderService ={
    branchId: string;
    quantity: number;
    price: number;
}

export type  BillingAddress ={
    name:UserName
    address:  {
        road?:string
        house?:string
        block?:string
        sector?:string
        village?:string
        city?:string
    };
}

export type  ShippingAddress ={
    name:UserName
    address:  {
        road?:string
        house?:string
        block?:string
        sector?:string
        village?:string
        city?:string
    };
}

export type ICustomer = {
    id: string;
    name:UserName
    email: string;
    phone: string,
    photo?:string
    address?: {
        road?:string
        house?:string
        block?:string
        sector?:string
        village?:string
        city?:string
    };
    registrationDate: Date;
    isActive: boolean;
    orders?: IOrder[];
    billingAddress?: BillingAddress;
    shippingAddress?: ShippingAddress;
}

export type CustomerModel = Model<ICustomer, object>