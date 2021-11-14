import { Box, Center, Flex, Row, Text, Heading } from '@chakra-ui/layout'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInputStepper,
  } from "@chakra-ui/react"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/NetForce.module.css'

export default function NetForce() {
    const [fl, sfl] = useState(10)
    const [fr, sfr] = useState(10)
    // fr(force right) sfr(set force right)

    return (
        <div>
            {/* <div height="20vh" width="20vh" bgColor="#FFFFFF">
                    <h1>hi</h1>
                </div>1b */}
            <Center h="100vh" color="black">
                <Flex flex-direction="row">
                <Center height="100px"><Text fontSize="2xl">{fl}N</Text></Center>
                <Image src="/right-arrow.png" width="100" height="100" />
                    <Flex align-items="center" justify-content="center" w="100px" h="100px" bg="white" color="black" flex-direction="center">

                        <Box bg="yellow" className={styles.centerBox}>
                            <Center height="100px"><Text fontSize="md">Net Force: {fr - fl}</Text></Center>
                        </Box>
                    </Flex>
                    <Image src="/left-arrow.png" width="100" height="100" />
                    <Center height="100px"><Text fontSize="2xl">{fl}N</Text></Center>
                </Flex>
            </Center>
            <FormControl id="amount">
  <FormLabel>Amount</FormLabel>
  <NumberInput max={50} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>
        </div>
    )
}
