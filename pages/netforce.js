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
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '/styles/NetForce.module.css'

export default function NetForce() {
    const [fl, sfl] = useState(0)
    const [fr, sfr] = useState(0)
    const [move, setmove] = useState("No Movement")
    const [balanced, setbalanced] = useState("Balanced")

    useEffect(() => {
        sfl(0)
        sfr(0)
    }, [])

    useEffect(() => {
        if (fl == fr) {
            setmove("Staying Still")
            setbalanced("Balanced")
        } else {
            setbalanced("Unbalanced")
            setmove(fr < fl ? "Moving Right" : "Moving Left")
        }
    }, [fl, fr])
    // fr(force right) sfr(set force right)

    return (
        <div>
            {/* <div height="20vh" width="20vh" bgColor="#FFFFFF">
                    <h1>hi</h1>
                </div>1b */}

            <Center h="100vh">
                <div className={styles.column}>
                    <Flex flex-direction="row">
                        <Center height="200x"><Text fontSize="2xl" width="10x">{fl}N</Text></Center>
                        <Image src="/right-arrow.png" width="100" height="100" />
                        <Flex align-items="center" justify-content="center" bg="white" color="black" flex-direction="center">
                            <Box bg="yellow" className={styles.centerBox} height="200px" width="200px">
                                <Center height="200px"><Text fontSize="md">Net Force = {fr - fl}<br/>
                                {balanced} <br/> {move}</Text></Center>
                            </Box>
                        </Flex>
                        <Image src="/left-arrow.png" width="100" height="100" />
                        <Center height="200px"><Text fontSize="2xl" width="50px">{fr}N</Text></Center>
                    </Flex>
                    <FormControl id="amount" width="400px">
                        <FormLabel>Force left</FormLabel>
                        <NumberInput max={1000000000} min={0} onChange={(valueString => sfl(valueString))}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>  <FormControl id="amount" width="400px">
                        <FormLabel>Force Right</FormLabel>
                        <NumberInput max={1000000000} min={0} onChange={(valueString => sfr(valueString))}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </div>
            </Center>
        </div>

    )
}
