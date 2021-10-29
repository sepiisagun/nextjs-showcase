import { 
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react"
import { MdHome, MdPerson, MdSchool, MdSettings, MdWork } from 'react-icons/md'


export default function Overview(){
    return(
        <List spacing={2}>
            <ListItem>
                <ListIcon as={MdWork} color="green.500" />
                Cynder
            </ListItem>
            <ListItem>
                <ListIcon as={MdSchool} color="green.500" />
                University of Baguio
            </ListItem>
            <ListItem>
                <ListIcon as={MdPerson} color="green.500" />
                Sef
            </ListItem>
        </List>
    )
}