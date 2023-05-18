import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import dataReducer from './../actions/dataReducer';
import * as actions from "../actions/eventClient"
import {
    Text, Tooltip, Box, Table, TableContainer, Select, Thead, Th, Tbody, Tr, Td, FormErrorMessage,
    Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
    ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure, ChakraProvider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Stack,
    Checkbox,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'
import { configureStore } from '@reduxjs/toolkit'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import "./styles.css";
import "react-calendar/dist/Calendar.css";
import 'react-toastify/dist/ReactToastify.css';

const mapActionToProps = {
    fetchAllEventClients: actions.fetchAll,
    createEventClient: actions.create,
    updateEventClient: actions.update,
    deleteEventClient: actions.Delete,
}

const mapStateToProps = state => {
    return {
        clientList: state.eventClient.list
    }
}

const Kalendaryo = props => {

    const {
        handleSubmit,
        register,
        unregister,
        watch,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    const [myData, setMyData] = useState([]);
    const [status, setStatus] = useState("");

    const [selectedDate, setSelectedDate] = useState();
    const [allDay, setAllDay] = useState(false);

    const [currentId, setCurrentId] = useState(0)

    const popover = useDisclosure()
    const modal = useDisclosure()
    const dialog = useDisclosure()

    const watchTypeCheck = watch("type");

    configureStore({
        reducer: {
            data: dataReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    serializableCheck: false
                },
            }),
    })

    //   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DATE STUFF @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const locale = 'fr-CA';

    var dateArray = [];
    var newDateArray = [];

    const formatDate = (date) => new Intl.DateTimeFormat(
        locale,
        {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).format(date)

    const dateFinal = formatDate(selectedDate).replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");

    //   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ CALENDAR STUFF @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const allMonthValues = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const handleDateChange = (value) => {
        setSelectedDate(value);
        popover.onToggle();
    };

    const handleYearChange = (value) => {
        const yearValue = value.getFullYear();
    };

    // Function to handle selected Month change
    const handleMonthChange = (value) => {
        const monthValue = allMonthValues[value.getMonth()];
    };

    //   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ FUNCTIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const onCreateSubmit = data => {
        props.createEventClient(data, () => successAdd())
        reset();
        modal.onClose();
        setStatus("");
    };

    const onUpdateSubmit = data => {
        props.updateEventClient(currentId, data, () => successEdit())
        reset();
        setStatus("");
        props.fetchAllEventClients();
        dispatch(actions.fetchAll());
        modal.onClose();
    }

    const openModal = () => {
        setStatus("create")
        modal.onOpen();
    }

    const closeModal = () => {
        setStatus("")
        modal.onClose();
    }

    const handleEdit = data => {
        setStatus("edit");
        modal.onOpen();
        setCurrentId(data.id);
        setValue('eventName', data.eventName);
        setValue('type', data.type);
        setValue('others', data.others);
        setValue('startTime', data.startTime);
        setValue('endTime', data.endTime);
        setValue('location', data.location);
    }


    const successDelete = () => toast.error("Event deleted successfully!", {
        position: "top-center",
    });

    const handleDelete = (id) => {
        props.deleteEventClient(id, () => successDelete())
        // dialog.onClose();
        console.log(id);
    }


    const successAdd = () => toast.success("Event added successfully!", {
        position: "top-center",
    });

    const successEdit = () => toast.info("Event edited successfully!", {
        position: "top-center",
    });


    //   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ USE EFFECTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    useEffect(() => {
        if (watchTypeCheck == "others") {
            register("type");
        } else {
            unregister("type");
        }
    }, [watchTypeCheck]);

    useEffect(() => {
        props.fetchAllEventClients();
        dispatch(actions.fetchAll());
    }, []);

    useEffect(() => {
        dispatch(actions.fetchAll());
    }, [dispatch]);


    useEffect(() => {
        setMyData(data);
        dispatch(actions.fetchAll());
    }, [data]);

    return (
        <ChakraProvider>
            <ToastContainer position="top-center" />
            <Box style={{ marginTop: "-150px" }}>
                <Stack>
                    <Calendar
                        onClickMonth={handleMonthChange}
                        onClickYear={handleYearChange}
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="calendar"
                    />
                    <Popover
                        isOpen={popover.isOpen}
                        onClose={popover.onClose}
                        placement='left'
                        closeOnBlur={true}
                    >
                        <PopoverTrigger>
                            <Text style={{ marginTop: "-150px" }}>&nbsp;</Text>
                        </PopoverTrigger>
                        <PopoverContent w="700px">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader display="flex">
                                Date details
                            </PopoverHeader>
                            <PopoverBody>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                <Th>Event Name</Th>
                                                <Th>Type of event</Th>
                                                <Th>Start Time</Th>
                                                <Th>End Time</Th>
                                                <Th>Location</Th>
                                                <Th>Actions</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                props.clientList.length > 0 ? props.clientList.map(data => {

                                                    const result = Object.values(data);
                                                    const eventDateFinal = result[7].slice(0, 10);

                                                    if (eventDateFinal === dateFinal) {
                                                        dateArray.push(eventDateFinal);
                                                        newDateArray.push(dateArray);
                                                    } else {
                                                        dateArray = [];
                                                    }
                                                    
                                                    return (
                                                        dateArray.includes(eventDateFinal) ?
                                                            <Tr key={data.id}>
                                                                <Td>{data.eventName}</Td>
                                                                <Td>{data.type}</Td>
                                                                <Td>{data.startTime}</Td>
                                                                <Td>{data.endTime}</Td>
                                                                <Td>{data.location}</Td>
                                                                <Td>
                                                                    <Button
                                                                        colorScheme='blue'
                                                                        mr={3}
                                                                        onClick={() => handleEdit(data)}
                                                                    >
                                                                        Edit
                                                                    </Button>
                                                                    <Button
                                                                        colorScheme='red'
                                                                        mr={3}
                                                                        onClick={() => handleDelete(data.id)}
                                                                        className="erase"
                                                                    >
                                                                        Delete
                                                                    </Button>
                                                                </Td>
                                                                {/* <Alert id={data.id} isOpen={dialog.isOpen} onClose={dialog.onClose} onClick={dialog.onClick} /> */}
                                                            </Tr>
                                                            : null
                                                    )
                                                })
                                                    :
                                                    <></>
                                            }
                                        </Tbody>
                                    </Table>
                                </TableContainer>

                                {newDateArray.length >= 5 ?
                                    <Tooltip label='Maximum of 5 events per day only.' placement='bottom'>
                                        <Button
                                            colorScheme='blue'
                                            mt={3}
                                            mr={3}
                                            onClick={() => openModal()}
                                            isDisabled={newDateArray.length >= 5 ? true : false}
                                        >
                                            Add an Event
                                        </Button>
                                    </Tooltip>
                                    :
                                    <Button
                                        colorScheme='blue'
                                        mt={3}
                                        mr={3}
                                        onClick={() => openModal()}
                                        isDisabled={newDateArray.length >= 5 ? true : false}
                                    >
                                        Add an Event
                                    </Button>
                                }
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Modal
                        size={"xl"}
                        isOpen={modal.isOpen}
                        onClose={() => closeModal()}
                    >
                        <form onSubmit={handleSubmit(status == "create" ? onCreateSubmit : onUpdateSubmit)}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Add an Event</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Event Name</FormLabel>
                                        <Input
                                            // value={values.eventName}
                                            // onChange={handleInputChange}
                                            placeholder='Enter name of event'
                                            id='eventName'
                                            {...register('eventName', {
                                                required: 'This is required'
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <Stack direction="row" mt={3}>
                                        <FormControl>
                                            <FormLabel>Type of event</FormLabel>
                                            <Select
                                                // value={eventType}
                                                // onChange={e => setEventType(e.target.value)}
                                                id="type"
                                                // value={values.type}
                                                // onChange={handleInputChange}
                                                placeholder='Select type of event'
                                                {...register('type', {
                                                    required: 'This is required'
                                                })}
                                            >
                                                <option value='Birthday'>Birthday</option>
                                                <option value='Wedding'>Wedding</option>
                                                <option value='Gender Reveal'>Gender Reveal</option>
                                                <option value='Halloween'>Halloween</option>
                                                <option value='Mother&lsquo;s Day'>Mother's Day</option>
                                                <option value='Holiday Season'>Holiday Season</option>
                                                <option value='Others'>Others..</option>
                                            </Select>
                                            <FormErrorMessage>
                                                {errors.type && errors.type.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        {watchTypeCheck == "others" ?
                                            <FormControl>
                                                <FormLabel>Others</FormLabel>
                                                <Input
                                                    placeholder='Enter type of event'
                                                    // value={values.others}
                                                    // onChange={handleInputChange}
                                                    id='others'
                                                    {...register('others', {
                                                        required: 'This is required'
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.others && errors.others.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                            : null
                                        }
                                    </Stack>
                                    {!allDay ?
                                        <Stack direction="row" mt={3}>
                                            <FormControl>
                                                <FormLabel>Start Time</FormLabel>
                                                <Input
                                                    type="time"
                                                    // value={values.startTime}
                                                    // onChange={handleInputChange}
                                                    id='startTime'
                                                    {...register('startTime', {
                                                        required: 'This is required'
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.startTime && errors.startTime.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>End Time</FormLabel>
                                                <Input
                                                    type="time"
                                                    // value={values.endTime}
                                                    // onChange={handleInputChange}
                                                    id='endTime'
                                                    {...register('endTime', {
                                                        required: 'This is required'
                                                    })}
                                                />
                                                <FormErrorMessage>
                                                    {errors.endTime && errors.endTime.message}
                                                </FormErrorMessage>
                                            </FormControl>
                                        </Stack>
                                        : <></>
                                    }
                                    <FormControl mt={3}>
                                        <FormLabel>Event Location</FormLabel>
                                        <Input
                                            placeholder='Enter location of event'
                                            // value={values.location}
                                            // onChange={handleInputChange}
                                            id='location'
                                            {...register('location', {
                                                required: 'This is required'
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.location && errors.location.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <Input
                                        type="date"
                                        value={dateFinal}
                                        id='eventDate'
                                        {...register('eventDate', {
                                            required: 'This is required',
                                            valueAsDate: true,
                                        })}
                                    />
                                    {/* <Input id="today" type="date" /> */}

                                </ModalBody>

                                <ModalFooter justifyContent="space-between">
                                    <Box>
                                        <Checkbox onChange={() => setAllDay(!allDay)} size="lg">All day</Checkbox>
                                    </Box>
                                    <Box>
                                        <Button
                                            colorScheme='blue'
                                            mr={3}
                                            type="submit"
                                            isLoading={isSubmitting}
                                        >
                                            Save
                                        </Button>
                                        <Button onClick={modal.onClose}>Cancel</Button>
                                    </Box>
                                </ModalFooter>
                            </ModalContent>
                        </form>
                    </Modal>
                </Stack>
            </Box>
        </ChakraProvider>
    );
}

const Alert = (id, isOpen, onClose) => {

    // const dialog = useDisclosure()
    const cancelRef = React.useRef()

    const successDelete = () => toast.error("Event deleted successfully!", {
        position: "top-center",
    });

    const handleDelete = (id) => {
        // props.deleteEventClient(id, () => successDelete())
        // dialog.onClose();
        console.log(id.id);
    }


    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete Customer
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme='red'
                            onClick={() => handleDelete(id)}
                            ml={3}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>

    )
}

export default connect(mapStateToProps, mapActionToProps)(Kalendaryo);
