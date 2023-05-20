import { Container, Stack, Box, Text, Button } from '@chakra-ui/react'
import Carousel from './Carousel.tsx';

function Home() {
    return (
        <Container id="home" bgColor="#FFEFF0" mt={{ base: "-150px", md: "-100px", lg: "0" }}>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                mx={{ base: '12', md: '24', lg: '12', xl: '16', '2xl': '48' }}
            >
                <Box w={{ base: '100%', lg: '50%' }} h={{ base: '600px', lg: '800px' }}>
                    <Box my={64} pr={{ base: '0', lg: '12' }}>
                        <Text fontWeight="900" fontSize={32}>HAVING AN EVENT SOON?</Text>
                        <Text fontSize={20}>
                            Plan and Book Unforgettable Events with Ease:
                            Simplify your event management process and secure your spot today!
                        </Text>
                        <a href="#booking"><Button bgColor="#FF7881" color="#fff" fontSize="xl" mt="4" _hover={{ bgColor: "#FF616C" }}>Book an event &gt;&gt;</Button></a>
                    </Box>
                </Box>
                <Box w={{ base: '100%', lg: '50%' }} h='800px'>
                    <Carousel />
                </Box>
            </Stack>
        </Container >
    );
}

export default Home;
