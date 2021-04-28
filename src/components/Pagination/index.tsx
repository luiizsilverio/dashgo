import { Stack, HStack, Text, Box } from '@chakra-ui/react'
import { Page } from './Page'

interface PaginationProps {
   totalCountOfRegisters: number
   registersPerPage?: number
   currentPage?: number
   onPageChange: (page: number) => void
}

const siblingsCount = 1  // 1 página anterior + 1 página posterior

function generatePagesArray(from: number, to: number) {
   const qtItens = (to - from)
   
   let array = []
   if (to > from) {
      for (let i = 0; i < qtItens; i++) {
         array.push(from + i + 1)
      }
   }
   return array
}

export function Pagination({ 
   totalCountOfRegisters,
   registersPerPage = 10,
   currentPage = 1,
   onPageChange
 }: PaginationProps) {

   const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

   const previousPages = currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage -1)
      : []

   const nextPages = currentPage < lastPage
      ?  generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : []

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

            { currentPage > (1 + siblingsCount) && (
               <>
                  <Page number={1} />
                  { currentPage > (2 + siblingsCount) && (
                     <Text color="gray.300" width="8" textAlign="center">...</Text>
                  )}
               </>
            )}

            { previousPages.length > 0 && previousPages.map(page => (
               <Page number={page} key={page} />
            ))}

            <Page number={currentPage} isCurrent />
     
            { nextPages.length > 0 && nextPages.map(page => (
               <Page number={page} key={page} />
            ))}

            { currentPage + siblingsCount < lastPage && (
               <>
                  { (currentPage + 1 + siblingsCount) < lastPage && (
                     <Text color="gray.300" width="8" textAlign="center">...</Text>
                  )}
                  <Page number={lastPage} />
               </>
            )}

         </HStack>
      </Stack>
   )
} 