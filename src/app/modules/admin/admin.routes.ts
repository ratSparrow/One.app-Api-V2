
import express from 'express'
import { AdminController } from './admin.controller'


const router = express.Router()

router.get('/', AdminController.getAllAdmins)
router.get('/:id', AdminController.getSingleAdmin)
router.patch(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  AdminController.updateAdmin,
)
router.delete(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  AdminController.deleteAdmin,
)

export const AdminRoutes = {
  router,
}
