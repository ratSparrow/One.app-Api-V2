/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

import ApiError from '../errors/ApiError'
import { IGenericErrorMessage } from '../../interfaces/error'
import { ZodError } from 'zod'
import config from '../../config'
import { errorlogger } from '../../shared/logger'
import handleCastError from '../errors/handleCastError'
import { handleValidationError } from '../errors/handleValidationError'
import { handleZodError } from '../errors/handleZodError'

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessages: IGenericErrorMessage[] = []

  config.env === 'development'
    ? console.log('globalhandler12345', err)
    : errorlogger.error('globalHandler', err)

  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: ' ',
            message: err.message,
          },
        ]
      : []
  } else if (err.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env === 'development' ? err?.stack : undefined,
  })
}
