import express from 'express'
import { ServiceCategoryController } from './category.controller'

const router = express.Router()

router.post(
  '/create',
  // RequestValidation.ValidateRequest(ServiceCategoryValidation.createServiceCategory),
//   auth(ENUM_USER_ROLE.ADMIN),
  ServiceCategoryController.createServiceCategory,
)
router.get('/', ServiceCategoryController.getAllServiceCategory)
router.get('/:id', ServiceCategoryController.getServiceCategoryById)
// router.get('/serviceId/:id', ServiceCategoryController.getSubServicesByServiceId)
router.patch(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  ServiceCategoryController.updateServiceCategory,
)
router.delete(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  ServiceCategoryController.deleteServiceCategory,
)

export const ServiceCategoryRoutes = {
  router,
}
