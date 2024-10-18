import { Request, Response } from "express";
import httpStatus from 'http-status'
import { catchAsync } from "../../../shared/catchAsync";
import { CategoryService } from "./category.service";
import sendResponse from "../../../shared/sendResponse";


const createServiceCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.createServiceCategory(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Category Created Successfully',
    data: result,
  })
})
const getAllServiceCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllServiceCategory()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Category retrieved Successfully',
    data: result,
  })
})
const getServiceCategoryById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await CategoryService.getServiceCategoryById(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Category retrieved Successfully',
      data: result,
    })
  },
)


const updateServiceCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await CategoryService.updateServiceCategory(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Category updated successfully',
    data: result,
  })
})

const deleteServiceCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CategoryService.deleteServiceCategory(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SubService deleted successfully',
    data: result,
  })
})

export const ServiceCategoryController = {
  createServiceCategory,
 getAllServiceCategory,
  getServiceCategoryById,

  updateServiceCategory,

  deleteServiceCategory,
}