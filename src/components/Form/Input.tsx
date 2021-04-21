import { 
   Input as ChakraInput, 
   InputProps as ChakraInputProps,
   FormLabel, 
   FormControl 
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
   name: string;
   label?: string;
   type?: string;
   placeHolder?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
   return (
      <FormControl>
         { !label || <FormLabel htmlFor={name}>{label}</FormLabel> }
         <ChakraInput 
            name={name}
            id={name}
            focusBorderColor="messenger.400"
            size="lg"
            _hover={{
               bgColor: "gray.900"
            }}
            {...rest}
         />
      </FormControl>
   )
}