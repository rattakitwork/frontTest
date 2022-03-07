import { useState } from 'react';
import axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Center, Button, Stack, useDisclosure } from '@chakra-ui/react'
import ModolFood from './ModolFood';

const DataComponent = (props) =>{
  const {items} = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [apiModol,setApiModol] = useState([])
  const [name,setName] = useState()
  const [price,setPrice] = useState()

  async function deleteApi(id) {
      if(confirm("ต้องการลบรายการนี้")){
        const response = await axios.delete('https://localhost:7153/api/Food/'+id);
      }
  }

  async function editApi(id) {
    const response = await axios.get('https://localhost:7153/api/Food/'+id);
    setApiModol(response.data)
    setName(response.data.name)
    setPrice(response.data.price)
    onOpen()
  }

  function editName(val) {
    setName(val.target.value)
  }

  function editPrice(val) {
    setPrice(val.target.value)
  }

  async function UpdateApi(id) {
    const items = {Id: id, Name: name, Price: price}
    await axios.put('https://localhost:7153/api/Food/'+id ,items)
    onClose()
  }

   return(
    <>
      <Table variant='simple'>
        <TableCaption>Table Test</TableCaption>
          <Thead>
            <Tr>
            <Th width="50%">Name</Th>
              <Th width="30%">Price</Th>
              <Th textAlign='center' width="20%">action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((e,i)=>{
              return (
                <Tr key={i}>
                  <Td>{e.name}</Td>
                  <Td>{e.price}</Td>
                  <Td>
                    <Center>
                      <Stack spacing={4} direction='row'>
                        <Button colorScheme='blue' size='sm' id={e.id} onClick={()=>{ editApi(e.id) }}>Edit</Button>
                        <Button colorScheme='red' size='sm' variant='outline' onClick={() => { deleteApi(e.id) }} >Delete</Button>
                      </Stack>
                    </Center>
                  </Td>
                </Tr>
              ) 
            })}
          </Tbody>
      </Table>
      <ModolFood name={apiModol.name} price={apiModol.price} id={apiModol.id} editName={editName} editPrice={editPrice} editApi={UpdateApi} editshow={isOpen} edithide={onClose}/>
    </>
   )
}

export default DataComponent