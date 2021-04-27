import { Button, Stack, HStack, Box } from '@chakra-ui/react'
import { Page } from './Page'

export function Pagination() {
   return (
      <Stack
         direction={["column", "row"]}
         mt="8"
         justify="space-between"
         align="center"
         spacing="6"         
      >
         <Box>
            <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
         </Box>

         <HStack spacing="2">
            <Page isCurrent={true}  number={1} />
            <Page isCurrent={false} number={2} />
            <Page isCurrent={false} number={3} />
            <Page isCurrent={false} number={4} />            
         </HStack>
      </Stack>
   )
} 