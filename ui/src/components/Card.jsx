import { Card, CardBody, Stack, Image, Text, Heading } from '@chakra-ui/react'

function CustomCard(props) {
    return (
        <Card maxW='sm'
            m="auto"
            boxShadow="xl"
            pos="relative"
            borderRadius='2xl'
            h="420px"
            px="6"
            py="10">
            <CardBody>
                <Image
                    src={props.img}
                    borderRadius='lg'
                    h="200px"
                    w="100%"
                />
                <Stack mt='6' spacing='3'>
                    <Heading fontSize='2xl' fontWeight="bold">{props.heading}</Heading>
                    <Text>{props.text}</Text>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CustomCard;


