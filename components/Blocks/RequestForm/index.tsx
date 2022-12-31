/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react'
import React from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import FormInput from '@components/Atom/formInput'
import SolidButton from '@components/Buttons/SolidButton'
import FormRadio from '@components/Atom/formRadio'
import FormSelect from '@components/Atom/formSelect'
import { BsPlus } from 'react-icons/bs'

interface IProp {
  isOpen: boolean
  onClose: () => void
}

interface IFields {
  name: string
  email: string
  phoneNumber: string
  otherPhone?: string
  churchMember: boolean
  churchBranch?: string
  otherChurch?: string
  videos: never[]
}

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

const ContactInfo: FC<{
  fields: IFields
  setFields: React.Dispatch<React.SetStateAction<IFields>>
}> = ({ fields, setFields }) => {
  return (
    <Box mt={12}>
      <Text fontWeight={600} fontSize={32}>
        Contact Info
      </Text>

      <FormInput
        label={'Your name'}
        name={'name'}
        value={fields}
        onChange={v => setFields({ ...fields, name: v.currentTarget.val })}
      />

      <FormInput
        label={'Your Email'}
        type={'email'}
        name={'email'}
        value={fields}
        onChange={v => setFields({ ...fields, email: v.currentTarget.val })}
      />

      <FormInput
        label={'Phone number'}
        name={'phoneNumber'}
        value={fields}
        onChange={v =>
          setFields({ ...fields, phoneNumber: v.currentTarget.val })
        }
      />

      <FormInput
        label={'Alternate Phone number'}
        name={'otherPhone'}
        value={fields}
        onChange={v =>
          setFields({ ...fields, otherPhone: v.currentTarget.val })
        }
      />
    </Box>
  )
}

const OrderInfo: FC<{
  fields: IFields
  setFields: React.Dispatch<React.SetStateAction<IFields>>
}> = ({ fields, setFields }) => {
  return (
    <Box mt={12}>
      <Text fontWeight={600} fontSize={32}>
        Order Info
      </Text>

      <FormRadio
        label={'Are you a member of Love Economy Church ?'}
        value={fields.churchMember || false}
        onChange={() =>
          setFields({ ...fields, churchMember: !fields.churchMember })
        }
      />

      {fields.churchMember ? (
        <FormSelect
          label="Which Love Economy Church Branch are you in"
          options={churches}
          value={fields.churchBranch || ''}
          placeholder="Select your branch from the list"
          onChange={e => setFields({ ...fields, churchBranch: e })}
        />
      ) : (
        <FormInput
          label={'The Name of your Church'}
          name={'otherChurch'}
          value={fields}
          onChange={v =>
            setFields({ ...fields, otherChurch: v.otherChurch.val })
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
          Which Video Drive(s) would you like to order?
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" my={3}>
          {videoOptions.map(item => (
            <Box key={item.name} my={4}>
              <Flex align="center">
                <Flex cursor={'pointer'} mr={2}>
                  <Icon as={BsPlus} boxSize={7} />
                </Flex>
                <Text>{item.name}</Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

const getPageInfo = (
  step: number,
  fields: IFields,
  setFields: React.Dispatch<React.SetStateAction<IFields>>
) => {
  switch (step) {
    case 1:
      return <ContactInfo fields={fields} setFields={setFields} />
    case 2:
      return <OrderInfo fields={fields} setFields={setFields} />

    default:
      break
  }
}

const RequestForm: FC<IProp> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)

  const [fields, setFields] = useState<IFields>({
    name: '',
    email: '',
    phoneNumber: '',
    otherPhone: '',
    churchMember: true,
    churchBranch: '',
    videos: []
  })

  const saveOrders = async () => {
    const res = await fetch('http://localhost:3000/api/order', {
      method: 'post',
      body: JSON.stringify(fields)
    })

    console.log(res)
  }

  const handleSubmit = () => {
    // validateAll();
    saveOrders()
    // reset();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
      <ModalOverlay />
      <ModalContent bg="whiteAlpha.500" color="white" filter={'blur(10)'}>
        <ModalHeader>Pre-Order Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent={'space-between'}>
            <Box pos={'relative'}>
              <Flex
                bg={step > 1 ? 'base.blue' : 'white'}
                color={step > 1 ? 'white' : 'base.blue'}
                borderWidth={step === 1 ? 2 : 0}
                borderColor={step === 1 ? 'base.blue' : 'transparent'}
                align="center"
                justify={'center'}
                rounded={'full'}
                w={10}
                h={10}
                fontSize={16}
              >
                1
              </Flex>
            </Box>
            <Box
              mt={5}
              flex={1}
              h={1}
              bg={step > 1 ? 'base.blue' : 'white'}
            ></Box>
            <Box>
              <Flex
                bg={step > 2 ? 'base.blue' : 'white'}
                color={step > 2 ? 'white' : step < 2 ? 'gray.600' : 'base.blue'}
                borderWidth={step <= 2 ? 2 : 0}
                borderColor={
                  step === 2
                    ? 'base.blue'
                    : step < 2
                    ? 'gray.600'
                    : 'transparent'
                }
                align="center"
                justify={'center'}
                rounded={'full'}
                w={10}
                h={10}
                fontSize={16}
              >
                2
              </Flex>
            </Box>
            <Box
              mt={5}
              flex={1}
              h={1}
              bg={step > 2 ? 'base.blue' : 'white'}
            ></Box>
            <Box>
              <Flex
                bg={step > 3 ? 'base.blue' : 'white'}
                color={step > 3 ? 'white' : step < 3 ? 'gray.600' : 'base.blue'}
                borderWidth={step <= 3 ? 2 : 0}
                borderColor={
                  step === 3
                    ? 'base.blue'
                    : step < 3
                    ? 'gray.600'
                    : 'transparent'
                }
                align="center"
                justify={'center'}
                rounded={'full'}
                w={10}
                h={10}
                fontSize={16}
              >
                3
              </Flex>
            </Box>
          </Flex>

          {getPageInfo(step, fields, setFields)}
        </ModalBody>

        <ModalFooter justifyContent={'space-between'}>
          <SolidButton
            color="base.blue"
            title={step === 3 ? 'Submit' : 'Next'}
            onClick={() =>
              step < 3 ? setStep(prev => prev + 1) : handleSubmit()
            }
          />
          <Button
            rounded={'xl'}
            color="black"
            bg="transparent"
            borderWidth={2}
            borderColor="black"
            textTransform={'uppercase'}
            minW={32}
            onClick={() => (step === 1 ? onClose() : setStep(prev => prev - 1))}
          >
            {step === 1 ? 'Cancel' : 'Previous'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RequestForm
