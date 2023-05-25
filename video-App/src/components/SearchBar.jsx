import { Icon, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <InputGroup justifyContent="center">
      <Input maxW="700px" placeholder="Search Videos" />
      <InputRightAddon bg="orange.400">
        <Icon as={IoIosSearch} boxSize={6} color="white" />
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchBar;
