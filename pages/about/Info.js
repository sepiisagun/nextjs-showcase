import { 
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react"
import { MdEmail, MdHome, MdLocalPhone, MdPerson, MdPhone, MdSchool, MdSettings, MdWork } from 'react-icons/md'


export default function Overview(){
    return(
        <List spacing={2}>
            <ListItem>
                <ListIcon as={MdLocalPhone} color="green.500" />
                600-1234
            </ListItem>
            <ListItem>
                <ListIcon as={MdPhone} color="green.500" />
                09081234567
            </ListItem>
            <ListItem>
                <ListIcon as={MdEmail} color="green.500" />
                Sef@cynder.io
            </ListItem>
        </List>
    )
}