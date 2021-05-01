import { Button } from '@chakra-ui/react'

type PageProps = {
   isCurrent?: boolean
   number: number
   onPageChange: (page: number) => void
}

export function Page({ isCurrent = false, number, onPageChange }: PageProps) {
   if (isCurrent) {
      return (
         <Button 
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="messenger"
            disabled
            _disabled={{
               bg: 'messenger.500',
               cursor: 'default'
            }}
            >
            { number }
         </Button>
      )
   } else {
      return (
         <Button 
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
               bg: 'gray.500',
            }}
            onClick={() => onPageChange(number)}
            >
            { number }
         </Button>
      )
   }
}