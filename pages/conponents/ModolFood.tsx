import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button,FormControl, FormLabel, Input } from '@chakra-ui/react'
  
const ModolFood = (props) =>{
  const {name,price,id,editName,editPrice,editApi,editshow,edithide,createName,createPrice,createApi,showCreate,hideCreate} = props;
  return(
    <Modal size="4xl" closeOnOverlayClick={false} isOpen={id===undefined ? showCreate : editshow} onClose={id===undefined ? hideCreate : edithide}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel htmlFor='Name'>Name</FormLabel>
              <Input defaultValue={name} onChange={id===undefined ? createName : editName} id='Name' type='text' />
            <FormLabel mt="3" htmlFor='Price'>Price</FormLabel>
              <Input defaultValue={price} onChange={id===undefined ? createPrice :editPrice} id='Price' type='number' />              
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={()=>{id===undefined ? createApi() : editApi(id)} } colorScheme='blue' mr={3}>Save</Button>
          <Button onClick={id===undefined ? hideCreate : edithide}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModolFood