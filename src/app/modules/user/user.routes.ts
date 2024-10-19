
import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post(
  '/create-customer',
  UserController.createCustomer
)
router.post(
  '/add-accountant',
  UserController.createAccountant
)
router.post(
  '/add-employee',
  UserController.createEmployee
)
router.post(
  '/add-admin',
  UserController.createAdmin
)


export const UserRoutes = {
  router,
}
