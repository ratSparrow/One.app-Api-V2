import { UserName } from "../../../interfaces/common";

export type IAccountant = {
    id: string;
    name: UserName;
    email: string;
    phone:string
    role: 'Accountant'; 
    department?: string; 
    experience: number; 
    expertise: string[]; 
    isCertified: boolean; 
    certificationName?: string; 
    contactNumber: string;
    address: string;
    photo?:string;
    availability: {
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
        sunday: boolean;
    }
}