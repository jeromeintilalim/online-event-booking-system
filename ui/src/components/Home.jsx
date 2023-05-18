import { Container, Stack, Box, Text, Button } from '@chakra-ui/react'
import Carousel from './Carousel.tsx';

function Home() {
    return (
        <Container id="home" bgColor="#FFEFF0" mt={{ base: "-150px", md: "-100px", lg: "0"}}>
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                mx={{ base: '12', md: '24', lg: '12', xl: '16', '2xl': '48' }}
            >
                <Box w={{ base: '100%', lg: '50%' }} h={{ base: '600px', lg: '800px' }}>
                    <Box my={64} pr={{ base: '0', lg: '12' }}>
                        <Text fontWeight="900" fontSize={32}>BOOKING SYSTEM</Text>
                        <Text fontSize={20}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Veritatis suscipit quo, molestias odit, quos delectus soluta est,
                            corrupti iste fuga perferendis! Eum voluptatum, non recusandae ullam
                            dolore expedita velit culpa.
                        </Text>
                        <Button bgColor="#FF7881" color="#fff" fontSize="xl" mt="4" _hover={{ bgColor: "#FF616C" }}>Book an event &gt;&gt;</Button>
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
