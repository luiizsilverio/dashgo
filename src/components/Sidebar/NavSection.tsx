import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

type NavSectionProps = {
   title: string
   children: ReactNode
}

export function NavSection(props: NavSectionProps) {
   return(
      <Box>
         <Text fontWeight="bold" color="gray.400" fontSize="small">
            { props.title }
         </Text>
         <Stack spacing="4" mt="8" align="stretch">
            { props.children }
         </Stack>
      </Box>
   )
}
