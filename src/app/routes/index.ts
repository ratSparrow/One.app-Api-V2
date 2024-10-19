import express from 'express'
import { ParamsDictionary, RequestHandler } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { AccountantRoutes } from '../modules/accountant/accountant.routes'
import { BranchRoutes } from '../modules/branch/branch.routes'
import { ServiceCategoryRoutes } from '../modules/category/category.routes'
import { CustomerRoutes } from '../modules/customer/customer.routes'
import { PackagesRoutes } from '../modules/packages/packages.routes'
import { UserRoutes } from '../modules/user/user.routes'
import { EmployeeRoutes } from '../modules/employee/employee.routes'


const router = express.Router()

const moduleRoutes:any = [
    {
        path: '/users/',
        route: UserRoutes.router,
    },
    {
        path: '/branch/',
        route: BranchRoutes.router,
    },
    {
        path: '/service-category/',
        route: ServiceCategoryRoutes.router,
    },
    {
        path: '/packages/',
        route: PackagesRoutes.router,
    },
    {
        path: '/customer/',
        route: CustomerRoutes.router,
    },
    {
        path: '/accountant/',
        route: AccountantRoutes.router,
    },
    {
        path: '/employee/',
        route: EmployeeRoutes.router,
    },
]

moduleRoutes.forEach((route: { path: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>; route: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }) => router.use(route.path, route.route))

export default router
