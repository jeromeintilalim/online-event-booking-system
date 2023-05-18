import { Container, Stack, GridItem, Image, Text, Heading, Box } from '@chakra-ui/react'
import Vector from '../images/bookingVector2.png'
import Kalendaryo from './Calendar';

function Booking() {
    return (
        <Container id="booking" bgColor="#FFEFF0" pb={40}>
            <Heading textAlign="center" fontSize='40' pt={8} pb={4} fontWeight="bold">BOOKING</Heading>
            <Text textAlign="center" pb={4} mb={16}>Book an event with us! Fill out the form below and make your plan a step further.</Text>
            <Stack direction={{ base: "column", xl: "row" }} mx={{ base: '12', md: '24', lg: '12', xl: '16', '2xl': '48' }}>
                <Box w='100%'>
                    <Image src={Vector} w="80%" mx="auto" />
                </Box>
                <Box w='100%' h="100%">
                    <Text mt={28} textAlign="center" fontSize={32}>Book your events now!</Text>
                    <Box pt={48} w="100%" h="30%" mx="auto" display="flex" justifyContent="center" alignItems="center">
                        <Kalendaryo />
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}

export default Booking;
