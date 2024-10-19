import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { CustomerService } from './customer.service'


const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.getAllCustomers()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customers retrieved Successfully',
        data: result,
    })
})
const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await CustomerService.getSingleCustomer(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customer retrieved Successfully',
        data: result,
    })
})


const updateCustomer = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await CustomerService.updateCustomer(id, updatedData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customer updated successfully',
        data: result,
    })
})

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await CustomerService.deleteCustomer(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customer deleted successfully',
        data: result,
    })
})

export const CustomerController = {

    getAllCustomers,
    getSingleCustomer,

    updateCustomer,
    deleteCustomer,
}
