import { z } from 'zod'

const createServiceCategory = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    features: z.string({
      required_error: 'Features are required',
    }),
    // serviceTypes: z.array(
    //    name: z.string{
    //     required_error:"Name is required"
    //   },
    // )
  }),
})

export const ServiceCategoryValidation = {
  createServiceCategory,
}
