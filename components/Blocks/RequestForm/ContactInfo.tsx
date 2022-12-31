/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import FormInput from '@components/Atom/formInput'
import { IFields } from '.'

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
}> = ({ fields, setFields }) => {
  console.log('Contact ', fields)

  return (
    <Box mt={12}>
      <Text fontWeight={600} fontSize={32}>
        Contact Info
      </Text>

      <FormInput
        label={'Your name'}
        name={'name'}
        value={fields.name}
        onChange={v =>
          handleChange(v?.currentTarget?.value, 'name', fields, setFields)
        }
      />

      <FormInput
        label={'Your Email'}
        type={'email'}
        name={'email'}
        value={fields.email}
        onChange={v =>
          handleChange(v?.currentTarget?.value, 'email', fields, setFields)
        }
      />

      <FormInput
        label={'Phone number'}
        name={'phoneNumber'}
        value={fields.phoneNumber}
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
