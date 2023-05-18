import { Container, Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import Carousel from './Carousel.tsx';

function Home() {
    return (
        <Container bgColor="#FFEFF0">
            <Grid templateColumns='50% 50%' mx={60}>
                <GridItem w='100%' h='800px'>
                    <Box my={64} pr="12">
                        <Text fontWeight="900" fontSize={32}>BOOKING SYSTEM</Text>
                        <Text fontSize={20}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Veritatis suscipit quo, molestias odit, quos delectus soluta est,
                            corrupti iste fuga perferendis! Eum voluptatum, non recusandae ullam
                            dolore expedita velit culpa.</Text>
                        <Button bgColor="#FF7881" color="#fff" fontSize="xl" mt="4" _hover={{ bgColor: "#FF616C" }}>Book an event &gt;&gt;</Button>
                    </Box>
                </GridItem>
                <GridItem w='100%' h='800px'>
                    <Carousel />
                </GridItem>
            </Grid>
        </Container>
    );
}

export default Home;
