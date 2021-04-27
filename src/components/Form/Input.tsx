
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { 
   Input as ChakraInput, 
   InputProps as ChakraInputProps,
   FormLabel, 
   FormControl 
} from '@chakra-ui/react'
import { FormErrorMessage } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
   name: string;
   label?: string;
   type?: string;
   placeHolder?: string;
   error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, 
   InputProps> = ({label, name, error = null, ...rest}, ref) => {
   return (
      <FormControl  isInvalid={ !!error }>
         { !label || <FormLabel htmlFor={name}>{label}</FormLabel> }
         <ChakraInput
            name={name}
            id={name}
            focusBorderColor="messenger.400"
            size="lg"
            _hover={{
               bgColor: "gray.900"
            }}
            ref={ref}
            {...rest}
         />

         { !!error && (
            <FormErrorMessage>
               { error.message }
            </FormErrorMessage>
         )}
      </FormControl>
   )
}

export const Input = forwardRef(InputBase);
