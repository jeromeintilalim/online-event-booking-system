import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	ChakraProvider
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai'
import React from 'react';


export default function BookingForm() {
	return (
		<ChakraProvider>
			<Box>
				<Stack direction="row" mb="3">
					<InputGroup>
						<InputLeftElement
							fontSize="lg"
							ms="1"
							mt="1"
							pointerEvents='none'
							children={<AiOutlineUser color='gray.300' />}
						/>
						<Input
							fontSize="lg"
							ps="7"
							// borderBottom="1px solid black"
							// _focus={{ borderBottom: "1px solid #FF616C !important", outline: "none" }}
							variant="flushed"
							placeholder='First name'
						/>
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							fontSize="lg"
							ms="1"
							mt="1"
							pointerEvents='none'
							children={<AiOutlineUser color='gray.300' />}
						/>
						<Input
							fontSize="lg"
							ps="7"
							borderBottom="1px solid black"
							_focus={{ borderBottom: "1px solid #FF616C !important", outline: "none" }}
							placeholder='Last name'
						/>
					</InputGroup>
				</Stack>
				<Stack direction="row" mb="3">
					<InputGroup>
						<InputLeftElement
							fontSize="lg"
							ms="1"
							mt="1"
							pointerEvents='none'
							children={<AiOutlineUser color='gray.300' />}
						/>
						<Input
							fontSize="lg"
							ps="7"
							borderBottom="1px solid black"
							_focus={{ borderBottom: "1px solid #FF616C !important", outline: "none" }}
							placeholder='Email'
						/>
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							fontSize="lg"
							ms="1"
							mt="1"
							pointerEvents='none'
							children={<AiOutlineUser color='gray.300' />}
						/>
						<Input
							fontSize="lg"
							ps="7"
							borderBottom="1px solid black"
							_focus={{ borderBottom: "1px solid #FF616C !important", outline: "none" }}
							placeholder='Number'
						/>
					</InputGroup>
				</Stack>
				<Stack direction="row" mb="3">
					<InputGroup>
						<InputLeftElement
							fontSize="lg"
							ms="1"
							mt="1"
							pointerEvents='none'
							children={<AiOutlineUser color='gray.300' />}
						/>
						<Input
							fontSize="lg"
							type="datetime-local"
							ps="7"
							borderBottom="1px solid black"
							_focus={{ borderBottom: "1px solid #FF616C !important", outline: "none" }}
							placeholder='Date &amp; Time'
						/>
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							fontSize="lg"
							ms="1"
							mt="1"
							pointerEvents='none'
							children={<AiOutlineUser color='gray.300' />}
						/>
						<Input
							fontSize="lg"
							ps="7"
							borderBottom="1px solid black"
							_focus={{ borderBottom: "1px solid #FF616C !important", outline: "none" }}
							placeholder='Type of event'
						/>
					</InputGroup>
				</Stack>
			</Box>
		</ChakraProvider>
	);
}