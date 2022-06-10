import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Navigation/Footer';

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider>
        <Head>
            <title>
                Tom Grayston - Software Engineer
            </title>
            <link rel = "icon" href="https://img.icons8.com/emoji/48/undefined/united-kingdom-emoji.png" type="image/x-icon"></link>
            <meta
                name="desciption"
                content="Personal Portfolio of Tom Grayston, a software engineer"
            />
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
    </ChakraProvider>
    )
}

export default MyApp