import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { EmployeeService } from './employee.service'



const getAllEmployees = catchAsync(async (req: Request, res: Response) => {
    const result = await EmployeeService.getAllEmployees()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Employees retrieved Successfully',
        data: result,
    })
})
const getSingleEmployee = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await EmployeeService.getSingleEmployee(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Employee retrieved Successfully',
        data: result,
    })
})


const updateEmployee = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await EmployeeService.updateEmployee(id, updatedData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Employee updated successfully',
        data: result,
    })
})

const deleteEmployee = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await EmployeeService.deleteEmployee(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Employee deleted successfully',
        data: result,
    })
})

export const EmployeeController = {

    getAllEmployees,
    getSingleEmployee,

    updateEmployee,
    deleteEmployee,
}
