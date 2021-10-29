import { 
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react"
import { MdHome, MdPerson, MdPlace, MdSchool, MdSettings, MdWork } from 'react-icons/md'


export default function Overview(){
    return(
        <List spacing={2}>
            <ListItem>
                <ListIcon as={MdPlace} color="green.500" />
                Baguio City
            </ListItem>
            <ListItem>
                <ListIcon as={MdPlace} color="green.500" />
                San Pedro, Laguna
            </ListItem>
            <ListItem>
                <ListIcon as={MdHome} color="green.500" />
                Santa Ignacia, Tarlac
            </ListItem>
        </List>
    )
}