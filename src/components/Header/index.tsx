import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
   const { onOpen } = useSidebarDrawer()

   const isTelaGrande = useBreakpointValue({
      base: false,
      lg: true
   })

   return (
      <Flex 
         as="header" 
         w="100%" 
         maxWidth={1210} 
         h="20"
         marginX="auto"
         mt="4"
         align="center"
         px="6"
      >

         { !isTelaGrande && (
            <IconButton 
               aria-label="Open navigation"
               icon={<Icon as={RiMenuLine} />}
               fontSize="24"
               variant="unstyled"
               onClick={onOpen}
               mr="2"
            />
         )}

         <Logo />
         
         { isTelaGrande && <SearchBox /> }
      
         <Flex align="center" ml="auto" >
            <Notifications />        
            <Profile showName={ isTelaGrande } />
         </Flex>
      </Flex>
   )
}

// Flex é um container com display Flex
// Stack é um container que permite espaçamento igual entre os componentes
// HStack é um Stack com display inline-block
// Box é uma div vazia
// Avatar tem a vantagem de mostrar as iniciais, caso não tenha imagem
