import logo from './logo.svg';
import './App.css';
import { Box, Text } from '@chakra-ui/react'
import CMD from './components/CMD';

function App() {
  return (
    <>
      <Box>
        <Text>HOME PAGE</Text>
        <Text>I'm a high school student in Maryland who loves to code, listen to music, and watch tv shows! I am interested in a career in tech and my mind is open to all kinds of possibilities.
Feel free to contact me through email, instagram, or linkedin. Find my resume here.</Text>
          <CMD/>
      </Box>
    </>

  );
}

export default App;
