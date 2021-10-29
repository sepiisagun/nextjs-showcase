import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  VStack,
  Link,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import React from 'react'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

  return (
    <Box>
     <header>
        <Box borderWidth='1px' borderRadius="md" width='100%' p={4}>
            <>
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                    Menu
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Navigation</DrawerHeader>

                        <DrawerBody>
                            <VStack align='left'>
                                <Link href='.'>Home</Link>
                                <Link href='./about'>About</Link>
                                <Link href='./showcase'>Showcase</Link>
                            </VStack>
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </>
        </Box>
      </header>

      <body>
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
                  <Link href='./about'>
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
                  <Link href='./showcase'>
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
      </body>
    </Box>
  )
}
