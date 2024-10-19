import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { Employee } from './employee.model'
import { IEmployee } from './employee.interface'



const getAllEmployees = async () => {
  const result = await Employee.find()
  return result
}

const getSingleEmployee = async (id: string) => {
  const result = await Employee.findById(id)
  return result
}

const updateEmployee = async (
  id: string,
  paylod: IEmployee,
)=> {
  const result = await Employee.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteEmployee = async (id: string) => {
  const services = await Employee.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Employee Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Employee.findByIdAndDelete(id)
  return result
}

export const EmployeeService = {

  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
}
