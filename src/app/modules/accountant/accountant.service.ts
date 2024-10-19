import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { Accountant } from './accountant.model'
import { IAccountant } from './accountant.interface'


const getAllAccountants = async () => {
  const result = await Accountant.find()
  return result
}

const getSingleAccountant = async (id: string) => {
  const result = await Accountant.findById(id)
  return result
}

const updateAccountant = async (
  id: string,
  paylod: IAccountant,
): Promise<IAccountant | null> => {
  const result = await Accountant.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteAccountant = async (id: string) => {
  const services = await Accountant.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Accountant Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Accountant.findByIdAndDelete(id)
  return result
}

export const AccountantService = {

  getAllAccountants,
  updateAccountant,
  deleteAccountant,
  getSingleAccountant,
}
