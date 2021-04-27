import { Text } from '@chakra-ui/react'

export function Logo() {
   return (
      <Text
         fontSize={["2xl", "3xl"]}
         fontWeight="bold"
         letterSpacing="tight"
         width="64"
      >
         dashGo
         <Text as="span" ml="1" color="messenger.500">.</Text>
      </Text>
   )  
}

// Breakpoints do Chakra-UI: tamanhos pré-definidos p/ responsividade
// sm, md, lg, xl, 2xl, 3xl...
