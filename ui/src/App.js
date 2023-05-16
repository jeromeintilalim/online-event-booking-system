import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { ChakraProvider, ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import Home from './components/Home';
import Events from './components/Events';
import Booking from './components/Booking.jsx';
import Kalendaryo from './components/Calendar.jsx';
import CalendarHandler from './components/CalendarHandler';
import WithSubnavigation from './components/Nav.tsx';
import { Provider } from 'react-redux';
import { store } from './actions/store';

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})


function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        {/* <ChakraBaseProvider theme={theme}> */}
        <>
          <WithSubnavigation />
          <Home />
          <Events />
          <Booking />
          {/* <Kalendaryo /> */}
        </>
        {/* </ChakraBaseProvider> */}
      </ChakraProvider>
    </Provider>
  );
}

export default App;
