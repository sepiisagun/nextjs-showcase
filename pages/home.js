import styles from '../styles/Home.module.css'
import {
  Box,
  Center,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import React, { useState }from 'react'

export default function Home({ changeContent }) {

    return(
        <main className={styles.main}>

          <h1 className={styles.title}>
            Welcome to My Showcase!
          </h1>

          <p className={styles.description}>
            Click on the links below to get started!
          </p>

          <Center>
            <HStack>
              <Box height='150px'
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  borderWidth={'1px'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                <Stack>
                  <Link onClick={() => changeContent('about')}>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      About&nbsp;&rarr;
                    </Heading>
                  </Link>
                  <Text color={'gray.500'}>
                    More about me, the creator of this webpage.
                  </Text>
                </Stack>
              </Box>

              <Box height='150px'
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  borderWidth={'1px'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}>
                <Stack>
                  <Link onClick={() => changeContent('showcase')}>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      Showcase&nbsp;&rarr;
                    </Heading>
                  </Link>
                  
                  <Text color={'gray.500'}>
                    Want to know my skills? Check this.
                  </Text>
                </Stack>
              </Box>
            </HStack>
          </Center>
        </main>
    )
    
}