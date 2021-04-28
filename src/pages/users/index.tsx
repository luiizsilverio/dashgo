import { Box, Flex, Button, Heading, Icon, Spinner } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { Checkbox, Text, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
//import Link from 'next/link'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'
import { useUsers } from '../../services/hooks/useUsers'

export default function UserList() {

   // isLoading é o 1.o carregamento dos dados
   const { data, isLoading, isFetching, error } = useUsers()
   
   const isTelaGrande = useBreakpointValue({
      base: false,
      lg: true
   })

   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />        

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justifyContent="space-between" align="center">
                 
                  <Heading 
                     size="lg" 
                     fontWeight="normal"
                  >
                     Usuários
                     { !isLoading && isFetching && 
                        <Spinner color="gray.500" ml="4" /> }
                  </Heading>
                  
                  {/*<Link href="/users/create" passHref>*/}
                  <Button 
                     as="a" 
                     href="/users/create"
                     size="sm" 
                     fontSize="sm" 
                     colorScheme="messenger"
                     leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                     >
                     Criar novo
                  </Button>
                  {/*</Link>*/}
               </Flex>

               { isLoading ? (
                 <Flex justify="center">
                    <Spinner />
                 </Flex>

               ) : error ? (
                  <Flex justify="center">
                    <Text>Falha ao obter dados dos usuários</Text>
                 </Flex>

               ) : (
                  <>
                  <Table colorScheme="whiteAlpha">
                     <Thead>
                        <Tr>
                           <Th px={["4", "4", "6"]} color="gray.300" width="8">
                              <Checkbox colorScheme="messenger" />
                           </Th>
                           <Th>Usuário</Th>
                           { isTelaGrande && <Th>Data de cadastro</Th> }
                           <Th width="8"></Th>
                        </Tr>
                     </Thead>
                     <Tbody>

                        { data.map(user => (
                           <Tr key={ user.id }>
                           <Td px={["4", "4", "6"]} >
                              <Checkbox colorScheme="messenger" />
                           </Td>
                           <Td>
                              <Box>
                                 <Text fontWeight="bold">{ user.name }</Text>
                                 <Text fontSize="sm" color="gray.300">
                                    { user.email }
                                 </Text>
                              </Box>
                           </Td>
                           { isTelaGrande && <Td>{ user.created_at }</Td> }
                           <Td>
                              <Button 
                                 as="a" 
                                 size="sm" 
                                 fontSize="sm"                               
                                 colorScheme="green"
                                 leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                 >
                                 { isTelaGrande ? "Editar" : "" }
                              </Button>
                           </Td>
                        </Tr>
                        )) }

                     </Tbody>
                  </Table>

                  <Pagination 
                     totalCountOfRegisters={200}
                     currentPage={19}
                     onPageChange={() => {}}
                  />
                  </>
               )}

            </Box>
         </Flex>
      </Box>
   )
}