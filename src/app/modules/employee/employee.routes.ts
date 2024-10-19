
import express from 'express'
import { EmployeeController } from './employee.controller'


const router = express.Router()

router.get('/', EmployeeController.getAllEmployees)
router.get('/:id', EmployeeController.getSingleEmployee)
router.patch(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  EmployeeController.updateEmployee,
)
router.delete(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  EmployeeController.deleteEmployee,
)

export const EmployeeRoutes = {
  router,
}
