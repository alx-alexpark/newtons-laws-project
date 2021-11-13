import { Box, Center, Flex, Row } from '@chakra-ui/layout'
import React from 'react'
import Image from 'next/image'

export default function NetForce() {
    return (
        <div>
            {/* <div height="20vh" width="20vh" bgColor="#FFFFFF">
                    <h1>hi</h1>
                </div>1b */}
            <Center h="100vh" color="white">
                <Flex flex-direction="row">
                    <Flex align-items="center" justify-content="center" w="100px" h="100px" bg="white" color="black" flex-direction="center">

                        <Center flex-grow="1">
                            <p align-self="center " color="black">Net Force:</p>
                        </Center>
                    </Flex>
                    <Image src="/../public/chevron-pointing-to-the-left.png" width="100" height="100" />
                    test test test
                </Flex>
            </Center>
        </div>
    )
}
