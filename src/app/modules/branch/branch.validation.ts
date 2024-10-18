import { z } from 'zod'

const createBranch = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
})

export const BranchValidation = {
  createBranch,
}
