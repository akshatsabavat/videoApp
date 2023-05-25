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
        maxW="700px"
        placeholder="Search Videos"
      />
      <InputRightAddon bg="orange.400">
        <Icon as={IoIosSearch} boxSize={6} color="white" />
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchBar;
