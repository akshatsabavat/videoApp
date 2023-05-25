import { Heading, Flex, Text, Icon, Avatar } from "@chakra-ui/react";

import { BsPlayFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Heading fontFamily="poppins">
        <Flex alignItems="center" gap={2}>
          <Icon as={BsPlayFill} boxSize={7} color="orange.300" />
          <Text fontSize="22px">Play.io</Text>
        </Flex>
      </Heading>

      <SearchBar />
      <Flex alignItems="center" gap={8}>
        <Icon as={FaVideo} boxSize={6} />
        <Avatar
          boxSize={9}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
