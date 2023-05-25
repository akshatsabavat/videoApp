import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Container paddingTop="3rem" maxW="1200px">
        <Navbar />
      </Container>
    </div>
  );
};

export default App;
