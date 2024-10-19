import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config';
import ApiError from '../../errors/ApiError';
import { IAccountant } from '../accountant/accountant.interface';
import { Accountant } from '../accountant/accountant.model';
import { IAdmin } from '../admin/admin.interface';
import { ICustomer } from '../customer/customer.interface';
import { Customer } from '../customer/customer.model';
import { IEmployee } from '../employee/employee.interface';
import { Employee } from '../employee/employee.model';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateAccountantId, generateAdminId, generateCustomerId, generateEmployeeId } from './user.utils';

const createCustomerService = async (
  user: IUser,
  customer: ICustomer
): Promise<IUser | null> => {
  // auto generated incremental id

  //default password
  if (!user.password) {
    user.password = config.default_pass as string
  }
  //set role
  user.role = 'Customer'


  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const id = await generateCustomerId()
    user.id = id
    customer.id = id;

    // create customer
    const newCustomer = await Customer.create([customer], { session })
    if (!newCustomer.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
      
    }
    console.log(newCustomer)
    //set customer id to user.customer
    user.customer = newCustomer[0]._id
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
     }

    newUserAllData = newUser[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  return newUserAllData
}
const createAccountantService = async (
  user: IUser,
  accountant: IAccountant
): Promise<IUser | null> => {
  // auto generated incremental id

  //default password
  if (!user.password) {
    user.password = config.default_pass as string
  }

  //set role
  user.role = 'Accountant'


  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const id = await generateAccountantId()
    user.id = id
    accountant.id = id;

    // create accountant
    const newAccountant = await Accountant.create([accountant], { session })
    if (!newAccountant.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
    }
    console.log("newAccountant",newAccountant)
    //set accountant id to user.accountant
    user.accountant = newAccountant[0]
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
     }

    newUserAllData = newUser[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  return newUserAllData
}
const createEmployeeService = async (
  user: IUser,
  employee: IEmployee
): Promise<IUser | null> => {


  //default password
  if (!user.password) {
    user.password = config.default_pass as string
  }
  //set role
  user.role = 'Employee'


  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
      // auto generated incremental id
    const id = await generateEmployeeId()
    user.id = id
    employee.id = id;

    // create employee
    const newEmployee = await Employee.create([employee], { session })
    if (!newEmployee.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
    }
    console.log("newEmployee",newEmployee)
    //set employee id to user.employee
    user.employee = newEmployee[0]._id as undefined
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
     }

    newUserAllData = newUser[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  return newUserAllData
}
const createAdminService = async (
  user: IUser,
  admin: IAdmin
): Promise<IUser | null> => {
  //default password
  if (!user.password) {
    user.password = config.default_pass as string
  }
  //set role
  user.role = 'Admin'


  let newUserAllData
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const id = await generateAdminId()
    user.id = id
    admin.id = id;

    // create admin
    const newAdmin = await Employee.create([admin], { session })
    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
    }
    console.log("newAdmin",newAdmin)
    //set admin id to user.admin
    user.admin = newAdmin[0]._id as undefined
    const newUser = await User.create([user], { session })
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
     }

    newUserAllData = newUser[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  return newUserAllData
}

export const UserService = {
  createCustomerService,
  createEmployeeService,
  createAccountantService,
  createAdminService
}
