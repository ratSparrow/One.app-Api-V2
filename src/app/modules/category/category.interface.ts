import { Model, Schema } from 'mongoose'
import { IBranch } from '../branch/branch.interface'

export type IQuantity = {
  quantityRange?: string
  priceRange?: string
}

export type ITermsAndConditions = {
  title: string
  details: string
}
export type IFaq = {
  query: string
  reply: string
}

export type IServiceCategory = {
  id?: string
  branch: Schema.Types.ObjectId | IBranch
  name: string
  images: string[]
  features: string[]
  description: string
  includedOption?: string[]
  excludedOption?: string[]
  termsCondition?: ITermsAndConditions[]
  warrantyHour?: string
  faq: IFaq[]
  rating?: 0 | 1 | 2 | 3 | 4 | 5
  totalRating: number
}

export type ServiceCategoryModel = Model<IServiceCategory>
