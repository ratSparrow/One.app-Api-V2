import express from 'express'
import { ParamsDictionary, RequestHandler } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { BranchRoutes } from '../modules/branch/branch.routes'
import { ServiceCategoryRoutes } from '../modules/category/category.routes'
import { PackagesRoutes } from '../modules/packages/packages.routes'
import { UserRoutes } from '../modules/user/user.routes'


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
]

moduleRoutes.forEach((route: { path: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>; route: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }) => router.use(route.path, route.route))

export default router
