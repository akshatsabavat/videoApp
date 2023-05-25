import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import VideoList from "./components/VideoList";

const App = () => {
  return (
    <div className="App">
      <Container paddingTop="3rem" maxW="1200px">
        <Navbar />
        <VideoList />
      </Container>
    </div>
  );
};

export default App;
