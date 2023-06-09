import { Container } from "@chakra-ui/react";
import VideoList from "../components/VideoComponents/VideoList";
import Pagination from "../components/PaginationComponents/Pagination";
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
