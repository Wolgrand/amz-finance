import {Flex, Tooltip, Button,Box,Text, Tr, Th,  Stack, SimpleGrid, theme, Tag, HStack, StatHelpText, Progress, Icon, LinkBox, LinkOverlay, VStack, Table, Thead, Tbody, Td} from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { format, compareAsc, parseISO } from 'date-fns'
import { useQuery } from 'react-query';
import { ContentSidebar } from '../../components/ContentSidebar';
import {Header} from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { api } from '../../services/apiClient';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { useState, useEffect } from 'react';
import { parseDate } from '../../utils/formatDate';
import { RiAddBoxLine, RiAddLine, RiArrowLeftDownFill, RiArrowLeftUpFill, RiArrowRightDownFill, RiHome2Line, RiInformationLine, RiMoneyDollarCircleLine, RiPencilLine, RiShoppingCart2Line, RiWallet3Line } from 'react-icons/ri';




export default function Dashboard() {
  /* const { data, isLoading, error} = useQuery<ProjectProps[]>('projects', async () => {
    const response = await api.get('/projects')
    
    const projects = response.data.map(item => {
      
      return {
        id: item['ref']['@ref'].id,
        title: item.data.title,
        startDate: parseDate(item.data.startDate),
        finishDate: parseDate(item.data.finishDate),
        avancoPrevisto: item.data.avancoPrevisto,
        avancoReal: item.data.avancoReal,
        status: item.data.status
      };
    })
    return projects.sort((a,b) => (a.title > b.title) ? 1 : -1);
  }) */



  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="2" maxWidth={1480} mx="auto" px="6">
        <ContentSidebar />
        <Flex direction="column" flex="1">
          <Text textAlign="center" fontSize="4xl"  fontWeight="bold">R$200,00</Text>
          <Text textAlign="center" color="gray.400">Saldo atual</Text>
            <HStack flex='1' mt="4">
              <Button
                  as="a"
                  p="2"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                >
                  <VStack textAlign="start" justifyItems="flex-start">
                    <Text textAlign="left" left={0} fontSize="small" color="gray.400">Entradas</Text>
                    <Text textAlign="start" fontSize="xl" color="green.500">R$200,00</Text>
                  </VStack>
                </Button>
                <Button
                  as="a"
                  p="2"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                >
                <VStack textAlign="start" justifyItems="flex-start">
                  <Text textAlign="left" left={0} fontSize="small" color="gray.400">Saídas</Text>
                  <Text textAlign="start" fontSize="xl" color="red.500">R$200,00</Text>
                </VStack>
              </Button>
            </HStack>
            <Text mt="6" mb="4" fontSize="xl" color="gray.200">Lançamentos</Text>
            <HStack borderBottom='2px' borderBottomColor="gray.700" justifyContent="space-between" px="6" color="gray.600" >
              <Text >Category</Text>
              <Text  >Data</Text>
              <Text >Valor</Text>
            </HStack>
            <Box mb='2'>
            <Stack mb='2' id='table' overflowY='scroll' h='40vh'>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'

                >
                  <Tag colorScheme="green" >Salário</Tag>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                >
                  <Tag colorScheme="red" >Farmácia</Tag>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
              <Button
                  as="a"
                  flex="1"
                  fontSize="sm"
                  bg="gray.800"
                  textAlign="right"
                  h="auto"
                  justifyContent="space-between"
                  px="6"
                  py='4'
                  color='red.500'
                >
                  <Text >Farmácia</Text>
                  <Text  >23/10/21</Text>
                  <Text >R$200,00</Text>
              </Button>
            </Stack>
            </Box>
            
            
        </Flex>
      </Flex>
      <Box bottom={0} w="full" h="16" position="fixed" bg="gray.800">
        <HStack h="full" spacing={0}>
          <Button
            as="a"
            p="2"
            flex="1"
            bg="gray.800"
            h="full"
            color="pink.500"
            flexDirection="column"
            _focus={{
              background:"gray.800"
              
            }}
          >
            <Icon as={RiHome2Line} fontSize="28"/>
            <Text mt="1" fontWeight="normal" fontSize="smaller">Home</Text>
          </Button>
          <Button
            as="a"
            p="2"
            flex="1"
            bg="gray.800"
            h="full"
            color="gray.400"
            flexDirection="column"
          >
            <Icon as={RiWallet3Line} fontSize="28"/>
            <Text mt="1" fontWeight="normal" fontSize="smaller">Home</Text>
          </Button>
          <Button
            as="a"
            p="2"
            flex="1"
            bg="gray.800"
            h="full"
            color="gray.400"
            flexDirection="column"
          >
            <Icon as={RiAddBoxLine} fontSize="36"/>
          </Button>
          <Button
            as="a"
            p="2"
            flex="1"
            bg="gray.800"
            h="full"
            color="gray.400"
            flexDirection="column"
          >
            <Icon as={RiPencilLine} fontSize="28"/>
            <Text mt="1" fontWeight="normal" fontSize="smaller">Home</Text>
          </Button>
          <Button
            as="a"
            p="2"
            flex="1"
            bg="gray.800"
            h="full"
            color="gray.400"
            flexDirection="column"
          >
            <Icon as={RiPencilLine} fontSize="28"/>
            <Text mt="1" fontWeight="normal" fontSize="smaller">Home</Text>
          </Button>
          
        </HStack>
      </Box>
    </Flex>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

  return {
   props: {}
 }
})