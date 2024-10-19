import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { ICustomer } from './customer.interface'
import { Customer } from './customer.model'


const getAllCustomers = async () => {
  const result = await Customer.find()
  return result
}

const getSingleCustomer = async (id: string) => {
  const result = await Customer.findById(id)
  return result
}

const updateCustomer = async (
  id: string,
  paylod: ICustomer,
): Promise<ICustomer | null> => {
  const result = await Customer.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteCustomer = async (id: string) => {
  const services = await Customer.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Customer Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Customer.findByIdAndDelete(id)
  return result
}

export const CustomerService = {

  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  getSingleCustomer,
}
