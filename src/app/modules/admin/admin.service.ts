import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IAdmin } from './admin.interface'
import { Admin } from './admin.model'


const getAllAdmins = async () => {
  const result = await Admin.find()
  return result
}

const getSingleAdmin = async (id: string) => {
  const result = await Admin.findById(id)
  return result
}

const updateAdmin = async (
  id: string,
  paylod: IAdmin,
) => {
  const result = await Admin.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteAdmin = async (id: string) => {
  const services = await Admin.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Admin Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Admin.findByIdAndDelete(id)
  return result
}

export const AdminService = {

  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getSingleAdmin,
}
