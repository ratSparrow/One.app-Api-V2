import { Model, Schema } from 'mongoose'
import { IBranch } from '../branch/branch.interface'
import { IServiceCategory } from '../category/category.interface'

export type IPackages = {
  branch: Schema.Types.ObjectId | IBranch
  category: Schema.Types.ObjectId | IServiceCategory
  name: string
  unit: string
  price: number
  details: string[]
  images: string[]
  discount: number
  options?: string[]
}

export type PackageModel = Model<IPackages>
