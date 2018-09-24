import { path, is } from 'ramda'
import { isNotAnArrayOfStrings } from '../utils/errorMessages'

// types
import { Request, Response, NextFunction } from 'express'

const isString = is(String)
const isArrayOfStrings = (test: any): boolean =>
  Array.isArray(test)
    ? !test.map(isString).includes(false)
    : false

export const isAnArrayOfStrings = (pathToValue: string[]) =>
  (req: Request, res: Response, next: NextFunction) =>
    isArrayOfStrings(path(pathToValue, req.body))
      ? next()
      : res.status(400).json(isNotAnArrayOfStrings(pathToValue))
