/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react'
import React from 'react'
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import SolidButton from '@components/Buttons/SolidButton'
import ContactInfo from './ContactInfo'
import OrderInfo from './OrderInfo'
import SummaryPage from './SummaryPage'
import { validate } from './utils'

interface IProp {
  isOpen: boolean
  onClose: () => void
}

export type IErrors = Record<
  | 'name'
  | 'email'
  | 'phoneNumber'
  | 'otherPhone'
  | 'churchMember'
  | 'churchBranch'
  | 'otherChurch'
  | 'videos',
  string | undefined
>

export interface IFields {
  name: string
  email: string
  phoneNumber: string
  otherPhone?: string
  churchMember: boolean
  churchBranch?: string
  otherChurch?: string
  videos: Record<string, number>
}

const getPageInfo = (
  step: number,
  showError: boolean,
  fields: IFields,
  setFields: React.Dispatch<React.SetStateAction<IFields>>,
  orderPlaced: boolean,
  errors: IErrors,
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>
) => {
  switch (step) {
    case 1:
      return (
        <ContactInfo
          fields={fields}
          setFields={setFields}
          errors={errors}
          showError={showError}
          setErrors={setErrors}
        />
      )
    case 2:
      return (
        <OrderInfo
          errors={errors}
          fields={fields}
          setFields={setFields}
          setErrors={setErrors}
          showError={showError}
        />
      )
    case 3:
    case 4:
      return <SummaryPage fields={fields} orderPlaced={orderPlaced} />

    default:
      break
  }
}

const RequestForm: FC<IProp> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errors, setErrors] = useState<IErrors>({
    name: undefined,
    email: undefined,
    phoneNumber: undefined,
    otherPhone: undefined,
    otherChurch: undefined,
    churchBranch: undefined,
    churchMember: undefined,
    videos: undefined
  })

  const [fields, setFields] = useState<IFields>({
    name: '',
    email: '',
    phoneNumber: '',
    otherPhone: '',
    churchMember: true,
    churchBranch: '',
    videos: {}
  })

  const saveOrders = async () => {
    const res = await fetch('https://meletao.loveeconomychurch.org/api/order', {
      method: 'post',
      body: JSON.stringify(fields)
    })
    return res
  }

  const reset = () => {
    const resetData = {
      name: '',
      email: '',
      phoneNumber: '',
      otherPhone: '',
      churchMember: true,
      churchBranch: '',
      videos: {}
    }
    setFields(resetData)
    setLoading(false)
    setOrderPlaced(false)
    setStep(1)
    onClose()
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await saveOrders()
      if (res) {
        setOrderPlaced(true)
        setStep(4)
        setTimeout(() => {
          reset()
        }, 5000)
      }
    } catch (error) {
      console.log('An Error Occured')
    } finally {
      setLoading(false)
    }
  }

  const handleNext = async () => {
    let keys: (
      | 'name'
      | 'email'
      | 'phoneNumber'
      | 'otherPhone'
      | 'churchMember'
      | 'churchBranch'
      | 'otherChurch'
      | 'videos'
    )[] = []
    if (step === 1) {
      keys = ['name', 'email', 'phoneNumber']
    } else if (step === 2) {
      keys = ['churchMember']
      if (fields.churchMember) {
        keys.push('churchBranch')
      } else {
        keys.push('otherChurch')
      }
    }

    const hasError = validate(keys, errors, fields, setErrors)
    if (!hasError) {
      setStep(prev => prev + 1)
    } else {
      setShowError(true)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
      <ModalOverlay />
      <ModalContent bg="blackAlpha.700" color="white" filter={'blur(10)'}>
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

          {getPageInfo(
            step,
            showError,
            fields,
            setFields,
            orderPlaced,
            errors,
            setErrors
          )}
        </ModalBody>

        <ModalFooter justifyContent={'space-between'}>
          <SolidButton
            display={step === 4 ? 'none' : 'flex'}
            color="base.blue"
            title={step === 3 ? 'Submit' : 'Next'}
            onClick={() => (step < 3 ? handleNext() : handleSubmit())}
            isDisabled={loading}
            isLoading={loading}
          />
          <Button
            display={step === 4 ? 'none' : 'flex'}
            isDisabled={loading}
            rounded={'xl'}
            color="white"
            bg="transparent"
            borderWidth={2}
            borderColor="white"
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
