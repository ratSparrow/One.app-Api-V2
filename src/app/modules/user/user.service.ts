

import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { IUser } from './user.interface';
import { ICustomer } from '../customer/customer.interface';
import config from '../../../config';
import { generateCustomerId } from './user.utils';
import { Customer } from '../customer/customer.model';
import ApiError from '../../errors/ApiError';
import { User } from './user.model';

const createStudentService = async (
  user: IUser,
  customer: ICustomer
): Promise<IUser | null> => {
  // auto generated incremental id

  //default password
  if (!user.password) {
    user.password = config.default_customer_pass as string
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






export const UserService = {
  createStudentService,

}
