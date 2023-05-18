import { Container, Grid, GridItem, Heading, Text, Button } from '@chakra-ui/react'
import Bday from '../images/bday.jpg'
import Halloween from '../images/halloween.jpg'
import Md from '../images/md.jpg'
import Gr from '../images/gr.jpg'
import Xmas from '../images/xmas.jpg'
import Wed from '../images/wed.jpg'
import CustomCard from '../components/Card'

function Events() {
    return (
        <Container id="events" bgColor="#FFF" mt="16" mb="24">
            <Heading textAlign="center" fontSize='40' fontWeight="bold">EVENTS</Heading>
            <Text textAlign="center">Choose from any of our six listed events. You can create a custom one as well.</Text>
            <Grid
                gap={8}
                templateRows={{ base: 'repeat(6, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(2, 1fr)' }}
                templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
                mx={{ base: '12', md: '24', lg: '12', xl: '16', '2xl': '48' }}
            >
                <GridItem w='100%' h='100%' mt="8">
                    <CustomCard img={Bday} heading="Birthday" text="I hope your celebration gives you many happy memories!" />
                </GridItem>
                <GridItem w='100%' h='100%' mt="8">
                    <CustomCard img={Wed} heading="Wedding" text="Walking with your hands in mine and mine in yours, that's exactly where I want to be always." />
                </GridItem>
                <GridItem w='100%' h='100%' mt="8">
                    <CustomCard img={Gr} heading="Gender Reveal" text="Ten little fingers, ten little toes, two little eyes, and one little nose, boy or a girl, no one knows!" />
                </GridItem>
                <GridItem w='100%' h='100%' mt="8">
                    <CustomCard img={Halloween} heading="Halloween" text="It's Halloween, Everyone's Entitled To One Good Scare" />
                </GridItem>
                <GridItem w='100%' h='100%' mt="8">
                    <CustomCard img={Md} heading="Mother's Day" text="It may be possible to gild pure gold, but who can make his mother more beautiful?”" />
                </GridItem>
                <GridItem w='100%' h='100%' mt="8">
                    <CustomCard img={Xmas} heading="Holiday Season" text="Christmas is the season of joy, of gift-giving, and of families united." />
                </GridItem>
            </Grid>
        </Container>
    );
}

export default Events;
