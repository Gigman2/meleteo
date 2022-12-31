/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import FormInput from '@components/Atom/formInput'
import { IErrors, IFields } from '.'
import { validate } from './utils'

export const handleChange = (
  val: string,
  key:
    | 'name'
    | 'email'
    | 'phoneNumber'
    | 'otherPhone'
    | 'otherChurch'
    | 'churchBranch',
  fields: IFields,
  setFields: React.Dispatch<React.SetStateAction<IFields>>
) => {
  const currentValues: IFields = { ...fields }
  currentValues[key] = val

  setFields(currentValues)
}

const ContactInfo: FC<{
  fields: IFields
  setFields: React.Dispatch<React.SetStateAction<IFields>>
  showError: boolean
  errors: IErrors
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>
}> = ({ fields, setFields, showError, setErrors, errors }) => {
  const required: ('name' | 'email' | 'phoneNumber')[] = [
    'name',
    'email',
    'phoneNumber'
  ]

  useEffect(() => {
    validate(required, errors, fields, setErrors)
  }, [fields])

  return (
    <Box mt={12}>
      <Text fontWeight={600} fontSize={32}>
        Contact Info
      </Text>

      <FormInput
        label={'Your name'}
        name={'name'}
        value={fields.name}
        isRequired={true}
        error={showError ? errors['name'] : null}
        onChange={v =>
          handleChange(v?.currentTarget?.value, 'name', fields, setFields)
        }
      />

      <FormInput
        label={'Your Email'}
        type={'email'}
        name={'email'}
        value={fields.email}
        isRequired={true}
        error={showError ? errors['email'] : null}
        onChange={v =>
          handleChange(v?.currentTarget?.value, 'email', fields, setFields)
        }
      />

      <FormInput
        label={'Phone number'}
        name={'phoneNumber'}
        value={fields.phoneNumber}
        isRequired={true}
        error={showError ? errors['phoneNumber'] : null}
        onChange={v =>
          handleChange(
            v?.currentTarget?.value,
            'phoneNumber',
            fields,
            setFields
          )
        }
      />

      <FormInput
        label={'Alternate Phone number'}
        name={'otherPhone'}
        value={fields.otherPhone || ''}
        onChange={v =>
          handleChange(v?.currentTarget?.value, 'otherPhone', fields, setFields)
        }
      />
    </Box>
  )
}
export default ContactInfo
