import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AccountantService } from './accountant.service'



const getAllAccountants = catchAsync(async (req: Request, res: Response) => {
    const result = await AccountantService.getAllAccountants()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Accountants retrieved Successfully',
        data: result,
    })
})
const getSingleAccountant = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AccountantService.getSingleAccountant(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Accountant retrieved Successfully',
        data: result,
    })
})


const updateAccountant = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await AccountantService.updateAccountant(id, updatedData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Accountant updated successfully',
        data: result,
    })
})

const deleteAccountant = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AccountantService.deleteAccountant(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Accountant deleted successfully',
        data: result,
    })
})

export const AccountantController = {

    getAllAccountants,
    getSingleAccountant,

    updateAccountant,
    deleteAccountant,
}
