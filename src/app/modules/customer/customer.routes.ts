
import express from 'express'
import { CustomerController } from './customer.controller'

const router = express.Router()

router.get('/', CustomerController.getAllCustomers)
router.get('/:id', CustomerController.getSingleCustomer)
router.patch(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  CustomerController.updateCustomer,
)
router.delete(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  CustomerController.deleteCustomer,
)

export const CustomerRoutes = {
  router,
}
