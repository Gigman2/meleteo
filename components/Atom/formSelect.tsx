/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Flex, FormLabel, position, Text } from '@chakra-ui/react'
import { Listbox } from '@headlessui/react'

interface IProp {
  label: string
  options: string[]
  value: string
  placeholder: string
  onChange: (e: string) => void
}

const FormSelect: FC<IProp> = ({
  label,
  options,
  value,
  onChange,
  placeholder
}) => {
  return (
    <Box
      bg="whiteAlpha.800"
      rounded="lg"
      borderWidth={2}
      borderColor="base.blue"
      width={{ base: 'full', lg: '50%' }}
      mb={8}
    >
      <FormLabel color="base.blue" fontWeight={600} px={4} py={2} margin={0}>
        {label}
      </FormLabel>
      <Flex style={{ position: 'relative' }}>
        <Listbox value={value} onChange={onChange}>
          <Listbox.Button
            style={{
              color: '#1d31b3',
              width: '100%',
              textAlign: 'left',
              paddingLeft: '16px',
              minHeight: '45px'
            }}
          >
            {value ? value : placeholder}
          </Listbox.Button>
          <Listbox.Options
            style={{
              color: '#1d31b3',
              width: '100%',
              borderRadius: '15px',
              overflow: 'auto',
              maxHeight: '200px',
              position: 'absolute',
              zIndex: 100,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              paddingLeft: '16px',
              listStyle: 'none',
              top: '36px',
              border: '2px solid #1d31b3'
            }}
          >
            {options.map(item => (
              <Listbox.Option
                key={item}
                value={item}
                style={{
                  cursor: 'pointer'
                }}
              >
                {({ selected, active }) => (
                  <Text
                    px={2}
                    py={2}
                    my={1}
                    fontWeight={selected ? 600 : 500}
                    bg={active ? 'rgba(29, 49, 179, 0.2)' : ''}
                  >
                    {item}
                  </Text>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </Flex>
    </Box>
  )
}

export default FormSelect
