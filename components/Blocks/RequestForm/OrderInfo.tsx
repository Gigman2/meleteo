import { FC, useEffect, useState } from 'react'
import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import FormInput from '@components/Atom/formInput'
import { IErrors, IFields } from '.'
import FormRadio from '@components/Atom/formRadio'
import FormSelect from '@components/Atom/formSelect'
import MessageSelector from './MessageSelector'
import { handleChange } from './ContactInfo'
import { validate } from './utils'

const churches = [
  'Abrepo',
  'Ahinsam',
  'Alpha',
  'Asafo',
  'Asankragua',
  'Atonsu',
  'Awoshie',
  'Brampton',
  'Buokrom',
  'Canada',
  'Cape Caost',
  'Diaspora',
  'Dzorwulu',
  'Ejisu',
  'Gbawe',
  'Ho',
  'Hohoe',
  'Kaneshie',
  'Kasoa',
  'Koforidua',
  'Kpando',
  'Lapaz',
  'Liverpool',
  'London',
  'Missisuaga',
  'Nanakrom',
  'New Legon',
  'Obuasi',
  'Oda',
  'Oyibi',
  'Pokuase',
  'Sunyani',
  'Santasi',
  'Swedru',
  'Takorabi',
  'Tamale',
  'Tema',
  'Tema Comm 7',
  'Teshie',
  'Thesaurus',
  'Virginia',
  'Wa',
  'Weija',
  'Winneba'
]

const videoOptions = [
  { id: 1, name: 'The Holy Spirit' },
  { id: 2, name: "Faith And The Believer's Authority" },
  { id: 3, name: 'The Word Of God' },
  { id: 4, name: 'The New Life' },
  { id: 5, name: 'Relationship, Sex and Marriage' },
  { id: 6, name: 'Prosperity Series' },
  { id: 7, name: 'How To serve The Lord' },
  { id: 8, name: 'Them That Love His Appearing' },
  { id: 9, name: 'Growing Spiritually' },
  { id: 10, name: 'Pastoral Care' },
  { id: 11, name: "Shepherds' Camps and Conferences" },
  { id: 12, name: 'Pastors Camps and Conferences' }
]

const OrderInfo: FC<{
  fields: IFields
  setFields: React.Dispatch<React.SetStateAction<IFields>>
  showError: boolean
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>
  errors: IErrors
}> = ({ fields, setFields, showError, errors, setErrors }) => {
  const handleRadioChange = (val: boolean, key: 'churchMember') => {
    const currentValues: IFields = { ...fields }
    currentValues[key] = val

    setFields(currentValues)
  }

  const required: ('churchMember' | 'churchBranch' | 'otherChurch')[] = [
    'churchMember'
  ]

  const [messages, setMessages] = useState<Record<string, number>>({})

  useEffect(() => {
    if (fields.churchMember) {
      required.push('churchBranch')
    } else {
      required.push('otherChurch')
    }

    validate(required, errors, fields, setErrors)
  }, [fields])

  useEffect(() => {
    const videos: Record<string, number> = {}
    if (Object.keys(fields.videos).length === 0) {
      if (videoOptions.length) {
        videoOptions.map(item => {
          videos[item.name] = 0
        })
      }
      setFields(prev => ({ ...prev, videos }))
    }
  }, [])

  return (
    <Box mt={12}>
      <Text fontWeight={600} fontSize={32}>
        Order Info
      </Text>

      <FormRadio
        label={'Are you a member of Love Economy Church ?'}
        value={fields.churchMember || false}
        onChange={() => handleRadioChange(!fields.churchMember, 'churchMember')}
        isRequired={true}
        error={showError ? errors['churchMember'] : null}
      />

      {fields.churchMember ? (
        <FormSelect
          label="Which Love Economy Church Branch are you in"
          options={churches}
          value={fields.churchBranch || ''}
          placeholder="Select your branch from the list"
          onChange={e => handleChange(e, 'churchBranch', fields, setFields)}
          isRequired={true}
          error={showError ? errors['churchBranch'] : null}
        />
      ) : (
        <FormInput
          label={'The Name of your Church'}
          name={'otherChurch'}
          value={fields.otherChurch || ''}
          isRequired={true}
          error={showError ? errors['otherChurch'] : null}
          onChange={v =>
            handleChange(
              v?.currentTarget?.value,
              'otherChurch',
              fields,
              setFields
            )
          }
        />
      )}

      <Box
        bg="whiteAlpha.800"
        rounded="lg"
        borderWidth={2}
        borderColor="base.blue"
        width={{ base: 'full', lg: '100%' }}
        color="base.blue"
        mb={8}
        px={4}
      >
        <Text fontWeight={600} py={3}>
          Which Video Message(s) would you like to order?
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" my={3}>
          {Object.keys(fields.videos).length
            ? Object.keys(fields.videos).map(item => (
                <MessageSelector
                  key={item}
                  name={item}
                  value={fields.videos[item]}
                  fields={fields}
                  setFields={setFields}
                />
              ))
            : null}
        </Grid>
      </Box>
    </Box>
  )
}

export default OrderInfo
