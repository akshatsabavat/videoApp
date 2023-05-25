import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../store/searchSlice";

import { Icon, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <InputGroup justifyContent="center">
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        maxW="500px"
        height="40px"
        background="gray.200"
        border="none"
        borderRadius="16px"
        fontSize="14px"
        fontFamily="Poppins"
        placeholder="Search Videos"
      />
      <InputRightAddon
        borderTopRightRadius="16px"
        borderBottomRightRadius="16px"
        bg="white.600"
        borderColor="gray.300"
      >
        <Icon as={IoIosSearch} boxSize={6} color="gray.500" />
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchBar;
