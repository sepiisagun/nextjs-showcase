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
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { MdCheck } from 'react-icons/md'

export default function showcase(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

    return(
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
                    <Heading as='h3'>
                        My Skills, Knowledge, and Certifications
                    </Heading>
                    <HStack>
                        <Box
                            maxW={'330px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Stack
                                textAlign={'center'}
                                p={6}
                                color={useColorModeValue('gray.800', 'white')}
                                align={'center'}>
                                <Text
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    bg={useColorModeValue('green.50', 'green.900')}
                                    p={2}
                                    px={3}
                                    color={'green.500'}
                                    rounded={'full'}>
                                    Skills
                                </Text>
                            </Stack>

                            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} minH={'400px'}>
                                <List spacing={3}>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Proficient in Ms Office
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Knowledged in Video and Photo Editing
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Hardware and Software Installation
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>

                        <Box
                            maxW={'330px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Stack
                                textAlign={'center'}
                                p={6}
                                color={useColorModeValue('gray.800', 'white')}
                                align={'center'}>
                                <Text
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    bg={useColorModeValue('green.50', 'green.900')}
                                    p={2}
                                    px={3}
                                    color={'green.500'}
                                    rounded={'full'}>
                                    Languages Learned
                                </Text>
                            </Stack>

                            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} minH={'400px'}>
                                <List spacing={3}>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Java
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Php
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Laravel
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Javascript
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    C#
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>

                        <Box
                            maxW={'330px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Stack
                                textAlign={'center'}
                                p={6}
                                color={useColorModeValue('gray.800', 'white')}
                                align={'center'}>
                                <Text
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    bg={useColorModeValue('green.50', 'green.900')}
                                    p={2}
                                    px={3}
                                    color={'green.500'}
                                    rounded={'full'}>
                                    Certifications
                                </Text>
                            </Stack>

                            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} minH={'400px'}>
                                <List spacing={3}>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    MTA: Introduction to Programming Using Java - Certified 2020
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    MTA: Database Fundamentals - Certified 2020
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Pluralsight Introduction to Wordpress
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Pluralsight Getting Started with Laravel - The Basics
                                    </ListItem>
                                    <ListItem>
                                    <ListIcon as={MdCheck} color="green.400" />
                                    Pluralsight Introduction to SQL Server
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </HStack>
                </main>
            </body>
        </Box>
    )
    
}