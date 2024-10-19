import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AdminService } from './admin.service'



const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.getAllAdmins()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Admins retrieved Successfully',
        data: result,
    })
})
const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AdminService.getSingleAdmin(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Admin retrieved Successfully',
        data: result,
    })
})


const updateAdmin = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await AdminService.updateAdmin(id, updatedData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Admin updated successfully',
        data: result,
    })
})

const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AdminService.deleteAdmin(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Admin deleted successfully',
        data: result,
    })
})

export const AdminController = {

    getAllAdmins,
    getSingleAdmin,

    updateAdmin,
    deleteAdmin,
}
