import { Request, Response } from 'express'


import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { AllBranchService } from './branch.service'
import sendResponse from '../../../shared/sendResponse'


const createBranch = catchAsync(async (req: Request, res: Response) => {
  const result = await AllBranchService.createBranch(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Branches Created Successfully',
    data: result,
  })
})
const getAllBranch = catchAsync(async (req: Request, res: Response) => {
  const result = await AllBranchService.getAllBranch()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Branches retrieved Successfully',
    data: result,
  })
})

const getSingleBranch = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllBranchService.getSingleBranch(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Branch retrieved Successfully',
    data: result,
  })
})

const updateBranch = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AllBranchService.updateBranch(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Branch updated successfully',
    data: result,
  })
})

const deleteBranch = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllBranchService.deleteBranch(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Branch deleted successfully',
    data: result,
  })
})

export const AllBranchController = {
  createBranch,
  getAllBranch,
  getSingleBranch,
  updateBranch,
  deleteBranch,
}
