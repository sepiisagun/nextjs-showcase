import styles from '../styles/Home.module.css'
import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import React from 'react'
import Overview from './about/Overview'
import Places from './about/Places'
import Info from './about/Info'

export default function About(){
    const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

    const [showOverview, setShowOverview] = React.useState(true)
    const [showPlaces, setShowPlaces] = React.useState(false)
    const [showInfo, setShowInfo] = React.useState(false)
    const disOverview = () => {
        hideComp()
        setShowOverview(true)
    }

    const disPlaces = () => {
        hideComp()
        setShowPlaces(true)
    }

    const disInfo = () => {
        hideComp()
        setShowInfo(true)
    }

    const hideComp = () => {
        console.log('yes')
        setShowOverview(false)
        setShowPlaces(false)
        setShowInfo(false)
    }

    return(
        <body>
            <main className={styles.main}>
                <VStack align='left'>
                    <Box>
                        <HStack>
                            <Image
                                borderRadius="full"
                                boxSize="150px"
                                src="https://bit.ly/sage-adebayo"
                                alt="Sef Sagun"
                            />
                            <Text fontWeight={600}>Sherman Joseph Sagun</Text>
                        </HStack>
                    </Box>
                    
                    <Box>
                        <HStack spacing={0} borderWidth='1px' borderRadius='md' divider={<StackDivider borderColor="gray.200" />}>
                            <Box
                                maxW={'445px'}
                                minW={'250px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.900')}
                                p={6}
                                overflow={'hidden'}>
                                <Stack>
                                    <Button colorScheme="teal" size="sm" onClick={disOverview}>
                                        Overview
                                    </Button>
                                    <Button colorScheme="teal" size="sm" onClick={disPlaces}>
                                        Places Lived
                                    </Button>
                                    <Button colorScheme="teal" size="sm" onClick={disInfo}>
                                        Contact and Basic Info
                                    </Button>
                                </Stack>
                            </Box>

                            <Box
                                maxW={'445px'}
                                minW={'300px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.900')}
                                p={6}
                                overflow={'hidden'}>
                                <Stack>
                                    {
                                        showOverview && <Overview />
                                    }
                                    {
                                        showPlaces && <Places />
                                    }
                                    {
                                        showInfo && <Info/>
                                    }
                                </Stack>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
            </main>
        </body>
    )
}