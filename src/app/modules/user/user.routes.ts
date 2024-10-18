
import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post(
  '/create-customer',
  UserController.createCustomer
)
router.post(
  '/add-employee',
  UserController.createEmployee
)


export const UserRoutes = {
  router,
}
