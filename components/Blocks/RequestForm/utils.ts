import { IErrors, IFields } from '.'

export const validate = (
  requiredKeys: (
    | 'name'
    | 'email'
    | 'phoneNumber'
    | 'otherPhone'
    | 'churchMember'
    | 'churchBranch'
    | 'otherChurch'
    | 'videos'
  )[],
  errors: IErrors,
  fields: IFields,
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>
) => {
  const pageErrors = { ...errors }
  let hasErrors = false
  requiredKeys.forEach(field => {
    if (fields[field] === '' || fields[field] === undefined) {
      pageErrors[field] = `${field} is required `
      hasErrors = true
    } else {
      pageErrors[field] = undefined
    }
  })
  setErrors(pageErrors)
  return hasErrors
}
