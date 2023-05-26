import { Container } from "@chakra-ui/react";
import VideoList from "../components/VideoList";
import Pagination from "../components/Pagination";
const HomePage = () => {
  return (
    <div className="App">
      <Container paddingTop="3rem" maxW="1200px">
        <Pagination />
        <VideoList />
      </Container>
    </div>
  );
};

export default HomePage;
