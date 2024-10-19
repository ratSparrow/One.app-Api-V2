import { RequestHandler } from 'express'




import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'


const createCustomer: RequestHandler = catchAsync(async (req, res) => {
  const { customer, ...user } = req.body
  console.log(req.body)
  const result = await UserService.createCustomerService(user, customer)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer sign up successful!',
    data: result,
  })
})
const createAccountant: RequestHandler = catchAsync(async (req, res) => {
  const { accountant, ...user } = req.body
  console.log(req.body)
  const result = await UserService.createAccountantService(user, accountant)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Accountant added successfully!',
    data: result,
  })
})
const createEmployee: RequestHandler = catchAsync(async (req, res) => {
  const { employee, ...user } = req.body
  console.log(req.body)
  const result = await UserService.createEmployeeService(user, employee)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee added successfully!',
    data: result,
  })
})
const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const { admin, ...user } = req.body
  console.log(req.body)
  const result = await UserService.createAdminService(user, admin)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin added successfully!',
    data: result,
  })
})



export const UserController = {
  createCustomer,
  createEmployee,
  createAccountant,
  createAdmin

}
