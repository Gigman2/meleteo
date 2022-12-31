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
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import SolidButton from '@components/Buttons/SolidButton'
import ContactInfo from './ContactInfo'
import OrderInfo from './OrderInfo'
import SummaryPage from './SummaryPage'

interface IProp {
  isOpen: boolean
  onClose: () => void
}

export interface IFields {
  name: string
  email: string
  phoneNumber: string
  otherPhone?: string
  churchMember: boolean
  churchBranch?: string
  otherChurch?: string
  videos: string[]
}

const getPageInfo = (
  step: number,
  fields: IFields,
  setFields: React.Dispatch<React.SetStateAction<IFields>>,
  orderPlaced: boolean
) => {
  switch (step) {
    case 1:
      return <ContactInfo fields={fields} setFields={setFields} />
    case 2:
      return <OrderInfo fields={fields} setFields={setFields} />
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
      videos: []
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
      // validateAll();
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

          {getPageInfo(step, fields, setFields, orderPlaced)}
        </ModalBody>

        <ModalFooter justifyContent={'space-between'}>
          <SolidButton
            display={step === 4 ? 'none' : 'flex'}
            color="base.blue"
            title={step === 3 ? 'Submit' : 'Next'}
            onClick={() =>
              step < 3 ? setStep(prev => prev + 1) : handleSubmit()
            }
            isDisabled={loading}
            isLoading={loading}
          />
          <Button
            display={step === 4 ? 'none' : 'flex'}
            isDisabled={loading}
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
