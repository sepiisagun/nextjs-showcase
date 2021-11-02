import {
    Box,
    Button,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Link,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import React from 'react'

export default function NavBar({ changeContent }){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
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
                                <Link onClick={() => changeContent('home')}>Home</Link>
                                <Link onClick={() => changeContent('about')}>About</Link>
                                <Link onClick={() => changeContent('showcase')}>Showcase</Link>
                            </VStack>
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </>
        </Box>
    )
}