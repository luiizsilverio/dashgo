import { Box, Flex, Button, Heading, Icon } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { Checkbox, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />        

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justifyContent="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">Usuários</Heading>
                  
                  <Button 
                     as="a" 
                     size="sm" 
                     fontSize="sm" 
                     colorScheme="messenger"
                     leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  >
                     Criar novo
                  </Button>
               </Flex>

               <Table colorScheme="whiteAlpha">
                  <Thead>
                     <Tr>
                        <Th px="6" color="gray.300" width="8">
                           <Checkbox colorScheme="messenger" />
                        </Th>
                        <Th>Usuário</Th>
                        <Th>Data de cadastro</Th>
                        <Th width="8"></Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td px="6">
                           <Checkbox colorScheme="messenger" />
                        </Td>
                        <Td>
                           <Box>
                              <Text fontWeight="bold">Luiz Oliveira</Text>
                              <Text fontSize="sm" color="gray.300">
                                 luiiz.silverio@gmail.com
                              </Text>
                           </Box>
                        </Td>
                        <Td>24 de Abril de 2021</Td>
                        <Td>
                           <Button 
                              as="a" 
                              size="sm" 
                              fontSize="sm"                               
                              colorScheme="green"
                              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                           >
                              Editar
                           </Button>
                        </Td>
                     </Tr>
                  </Tbody>
               </Table>

               <Pagination />
            </Box>
         </Flex>
      </Box>
   )
}