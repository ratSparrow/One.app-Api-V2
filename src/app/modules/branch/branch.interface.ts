import { Model } from 'mongoose'

export type IBranch = {
  id: string
  name: string
  image: string
}

export type ServiceModel = Model<IBranch>
