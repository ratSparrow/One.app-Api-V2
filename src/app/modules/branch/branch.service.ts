import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { IBranch } from './branch.interface'
import { Branch } from './branch.model'

const createBranch = async (payload: IBranch) => {
  const result = await Branch.create(payload)
  return result
}
const getAllBranch = async () => {
  const result = await Branch.find()
  return result
}

const getSingleBranch = async (id: string) => {
  const result = await Branch.findById(id)
  return result
}

const updateBranch = async (
  id: string,
  paylod: IBranch,
): Promise<IBranch | null> => {
  const result = await Branch.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteBranch = async (id: string) => {
  const Branchs = await Branch.findById(id)
  if (!Branchs) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Branch Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Branch.findByIdAndDelete(id)
  return result
}

export const AllBranchService = {
  createBranch,
  getAllBranch,
  updateBranch,
  deleteBranch,
  getSingleBranch,
}
