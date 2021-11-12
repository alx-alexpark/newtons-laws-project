import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Heading, Text} from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Flex flex-direction="column">

        <Heading className={styles.linearWipe}>NEWTON&apos;S LAWS Project</Heading> 
        <Text font-size="medium" className={styles.linearWipe}>WIP, by Alexander Park</Text>
      </Flex>
    </div>
  )
}
