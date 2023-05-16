import { Container, Grid, GridItem, Image, Text, Heading, Box } from '@chakra-ui/react'
import Vector from '../images/bookingVector2.png'
import BookingForm from './BookingForm.tsx'
import Kalendaryo from './Calendar';

function Booking() {
    return (
        <Container bgColor="#FFEFF0">
            <Heading textAlign="center" fontSize='40' fontWeight="bold">BOOKING</Heading>
            <Text textAlign="center">Book an event with us! Fill out the form below and make your plan a step further.</Text>
            <Grid templateColumns='50% 50%' mx={60}>
                <GridItem w='100%'>
                    <Image src={Vector} w="70%" />
                </GridItem>
                <GridItem w='100%' h="1000px">
                    <Box bgColor="#FFF" w="80%" h="500px" mx="auto" display="flex" justifyContent="center" alignItems="center">
                        <Kalendaryo />
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    );
}

export default Booking;
