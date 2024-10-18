
import { Schema, model } from 'mongoose'
import { IServiceCategory, ServiceCategoryModel } from './category.interface'

const ServiceCategorySchema = new Schema<IServiceCategory>(
  {
    branch: {
      type: Schema.Types.ObjectId,
      ref: 'Branch',
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    images: {
      type: [String],
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    includedOption: {
      type: [String],
      required: false,
    },
    excludedOption: {
      type: [String],
      required: false,
    },
    termsCondition: [
      {
        title: {
          type: String,
          required: false,
        },
        details: {
          type: String,
          required: false,
        },
      },
    ],
    warrantyHour: {
      type: String,
      required: false,
    },
    faq: [
      {
        query: {
          type: String,
          required: false,
        },
        reply: {
          type: String,
          required: false,
        },
      },
    ],
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      required: false,
    },
    totalRating: {
      type: Number,
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

export const ServiceCategory = model<IServiceCategory, ServiceCategoryModel>(
  'service-category',
  ServiceCategorySchema,
)
