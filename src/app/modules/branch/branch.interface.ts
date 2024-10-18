import { Model } from 'mongoose'

export type IBranch = {
  name: string
  image: string
}

export type BranchModel = Model<IBranch>
