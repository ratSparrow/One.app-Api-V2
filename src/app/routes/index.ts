import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'


const router = express.Router()

const moduleRoutes:any = [
    {
        path: '/users/',
        route: UserRoutes.router,
      },
]

moduleRoutes.forEach((route: { path: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>; route: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>> }) => router.use(route.path, route.route))

export default router
