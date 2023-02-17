import React from "react";
import {
  Box,
  // Button,
  Center,
  Divider,
  Flex,
  Heading,
  // Text,
} from "@chakra-ui/react";
import Stopwatch1 from "./components/Stopwatch1";
import Stopwatch2 from "./components/Stopwatch2";
import Stopwatch3 from "./components/Stopwatch3";
import Posts from "./components/Posts/Posts";
// import useToggle from "./Hooks/useToggle";

function App() {
  // const [value, toggle] = useToggle(false);
  // const [value1, toggle1] = useToggle(false);

  return (
    <>
      <Box>
        <Center>
          <Heading>StopWatchs</Heading>
        </Center>
        <Center>
          <Flex rowGap={6}>
            <Stopwatch1 />
            <Stopwatch2 />
            <Stopwatch3 />
          </Flex>
        </Center>
        <Divider my={4} />
        <Center>
          <Posts />
        </Center>
      </Box>

      {/* <Box>
        <Text>useToggle {value ? "True" : "False"} </Text>
        <Button onClick={() => toggle()}>Toggle</Button>
        <br />
        <br />
        <Text>useToggle 1 {value1 ? "True" : "False"} </Text>
        <Button onClick={() => toggle1()}>Toggle 1</Button>
      </Box> */}
    </>
  );
}

export default App;
