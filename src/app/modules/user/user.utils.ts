import { User } from "./user.model"


export const findLastCustomerId = async (): Promise<string | undefined> => {
  const lastCustomerId = await User.findOne(
    { role: 'Customer' },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastCustomerId?.id ? lastCustomerId.id.substring(4) : undefined
}

export const generateCustomerId = async (): Promise<string> => {
  const currentId =
    (await findLastCustomerId()) || (0).toString().padStart(5, '0')

  //increment by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `CM-${incrementedId}`

  return incrementedId
}

export const findLastEmployeeId = async (): Promise<string | undefined> => {
  const lastEmployeeId = await User.findOne(
    { role: 'Employee' },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastEmployeeId?.id ? lastEmployeeId.id.substring(4) : undefined
}

export const generateEmployeeId = async (): Promise<string> => {
  const currentId =
    (await findLastEmployeeId()) || (0).toString().padStart(5, '0')

  //increment by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `EM-${incrementedId}`

  return incrementedId
}

export const findLastAccountantId = async (): Promise<string | undefined> => {
  const lastAccountantId = await User.findOne(
    {
      role: 'Accountant',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastAccountantId?.id ? lastAccountantId.id.substring(2) : undefined
}

export const generateAccountantId = async (): Promise<string> => {
  const currentId =
    (await findLastAccountantId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `AC-${incrementedId}`
  return incrementedId
}

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastAdminId = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastAdminId?.id ? lastAdminId.id.substring(2) : undefined
}

export const generateAdminId = async (): Promise<string> => {
  const currentId = (await findLastAdminId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `AD-${incrementedId}`
  return incrementedId
}
