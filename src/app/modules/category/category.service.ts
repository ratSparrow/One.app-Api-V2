import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { IServiceCategory } from './category.interface'
import { ServiceCategory } from './category.model'

const createServiceCategory = async (payload: IServiceCategory) => {
  const result = await ServiceCategory.create(payload)
  return result
}

const getAllServiceCategory = async () => {
  const result = await ServiceCategory.find()
  return result
}


const getServiceCategoryById = async (id: string) => {
  const result = await ServiceCategory.find({branch:id}).populate('branch')
  return result
}

const updateServiceCategory = async (
  id: string,
  paylod: IServiceCategory,
): Promise<IServiceCategory | null> => {
  const result = await ServiceCategory.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteServiceCategory = async (id: string) => {
  const subServices = await ServiceCategory.findById(id)
  if (!subServices) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'ServiceCategory Not Found and Deletion Unsuccessfull',
    )
  }
  const result = ServiceCategory.findByIdAndDelete(id)
  return result
}

export const CategoryService= {
  createServiceCategory,
  getAllServiceCategory,
  getServiceCategoryById,
  updateServiceCategory,
  deleteServiceCategory,
}
