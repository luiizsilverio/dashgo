import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string
  password: string
}

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha não informada").min(6, 'Digite ao menos 6 letras ou números')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema)
  })

  const errors = formState.errors

  //const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
  function handleSignIn(values: SignInFormData) {
    console.log(values)
  }

  return (
    <>
        <Flex 
          w="100vw" 
          h="100vh" 
          alignItems="center" 
          justifyContent="center"
          >
          <Flex as="form" 
            flexDirection="column"
            width="100%" 
            maxWidth={360}
            bg="gray.800"
            p="8"
            borderRadius={8}
            onSubmit={handleSubmit(handleSignIn)}
            >
            <Stack spacing="4">
              <Input 
                name="email" 
                type="email" 
                label="E-mail" 
                placeholder="E-mail" 
                error={errors.email}
                {...register('email')}
              />

              <Input 
                name="password" 
                type="password" 
                label="Senha" 
                placeholder="Senha" 
                error={errors.password}
                {...register('password')}
              />
              
              <Button 
                type="submit" 
                mt="6" 
                colorScheme="messenger" 
                size="lg"
                isLoading={formState.isSubmitting}
              >
                Entrar
              </Button>
            </Stack>
          </Flex>
        </Flex>
    </>
  )
}
