import {AppProps} from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import {SidebarDrawerProvider} from '../contexts/SidebarDrawerContext'
import {QueryClient, QueryClientProvider} from 'react-query'
import { AuthProvider } from '../contexts/AuthContext'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default MyApp
