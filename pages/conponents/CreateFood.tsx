import { useState} from 'react'
import { Button, useDisclosure, SimpleGrid, Center } from '@chakra-ui/react'
import axios from 'axios';
import ModolFood from './ModolFood';
const CreateFood = (props) =>{
  const {eventCreate} = props
  const [name,setName] = useState([])
  const [price,setPrice] = useState([])

  function textName(val){
    setName(val.target.value)
  }

  function textPrice(val){
    setPrice(val.target.value)
  }

  async function createApi() {
    const items = { Name: name, Price: price}
    await axios.post('https://localhost:7153/api/Food' ,items)
    eventCreate()
    onClose()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Center>
        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
          <Button mt="7" colorScheme='teal' onClick={onOpen} >Create Data Food</Button>
        </SimpleGrid>
      </Center>
      <ModolFood createName={textName} createPrice={textPrice} createApi={createApi} showCreate={isOpen} hideCreate={onClose}/>
    </>
  )
}

export default CreateFood