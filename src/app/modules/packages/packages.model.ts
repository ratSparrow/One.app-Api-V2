import { Schema, model } from 'mongoose'
import { IPackages, PackageModel } from './packages.interface'

const PackageSchema = new Schema<IPackages>(
  {
    branch: {
      type: Schema.Types.ObjectId,
      ref: 'branch',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'service-category',
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    details: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    discount: {
      type: Number,
      required: false,
    },
    options: {
      type: [String],
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

export const Packages = model<IPackages, PackageModel>(
  'packages',
  PackageSchema,
)
