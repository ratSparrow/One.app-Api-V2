import { Schema, model } from 'mongoose'
import { BranchModel, IBranch } from './branch.interface'


const BranchSchema = new Schema<IBranch>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Branch = model<IBranch, BranchModel>('branch', BranchSchema)
