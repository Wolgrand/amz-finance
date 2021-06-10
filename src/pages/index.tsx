import Head from 'next/head'
import Logo from '../components/Header/Logo';
import {Input} from '../components/Form/Input'
import {Flex, Text, Button, Stack, Image, Box, Center, useToast} from '@chakra-ui/react'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {parseCookies} from 'nookies'
import { AuthContext } from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { withSSRGuest } from '../utils/withSSRGuest'


export default function Home() {
  const router = useRouter()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password,
    }

    try{
      await signIn(data)
    }catch(e) {
      toast({
        title: "Erro ao fazer o login.",
        description: "Tente novamente mais tarde.",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }

  }
  
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        justifyContent="center"
        borderRadius={8}
        flexDir="column"
        color="gray.600"
        onSubmit={handleSubmit}
      >
        <Text
          fontSize={["3xl","4xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
          justifyContent="center"
          color="white"
          textAlign="center"
          mb="4"
        >
          amz
          <Text as="span" ml="1" color="pink.500">.</Text>
          <Text as="span" ml="1" color="white">finance</Text>
        </Text>
        <Stack spacing="4">
          <Input type="email" value={email} name="email" label="E-mail" onChange={e => setEmail(e.target.value)} />
          <Input type="password" value={password} name="password" label="Senha" onChange={e => setPassword(e.target.value)} />   
        </Stack>
        
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
   return {
    props: {}
  }
})