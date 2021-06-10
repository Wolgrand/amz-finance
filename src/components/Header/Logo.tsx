import {Text} from '@chakra-ui/react'

export default function Logo(){
  return (
    <Text
      fontSize={["3xl","4xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      justifyContent="center"
      color="white"
      textAlign="center"
    >
      amz
      <Text as="span" ml="1" color="pink.500">.</Text>
      <Text as="span" ml="1" color="white">finance</Text>
    </Text>
  )
}