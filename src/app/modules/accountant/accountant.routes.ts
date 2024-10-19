
import express from 'express'
import { AccountantController } from './accountant.controller'


const router = express.Router()

router.get('/', AccountantController.getAllAccountants)
router.get('/:id', AccountantController.getSingleAccountant)
router.patch(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  AccountantController.updateAccountant,
)
router.delete(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  AccountantController.deleteAccountant,
)

export const AccountantRoutes = {
  router,
}
