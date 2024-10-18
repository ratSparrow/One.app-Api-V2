
import express from 'express'

import { RequestValidation } from '../../middlewares/validateRequest'
import { AllBranchController } from './branch.controller'
import { BranchValidation } from './branch.validation'

const router = express.Router()

router.post(
  '/create',
  RequestValidation.ValidateRequest(BranchValidation.createBranch),
//   auth(ENUM_USER_ROLE.ADMIN),
  AllBranchController.createBranch,
)
router.get('/', AllBranchController.getAllBranch)
router.get('/:id', AllBranchController.getSingleBranch)
router.patch(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  AllBranchController.updateBranch,
)
router.delete(
  '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
  AllBranchController.deleteBranch,
)

export const BranchRoutes = {
  router,
}
