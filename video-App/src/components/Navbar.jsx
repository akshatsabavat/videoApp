import { Heading, Flex, Text, Icon, Avatar, Image } from "@chakra-ui/react";

import youtubeIcon from "../assets/YouTubeLogo.svg";
import { FaVideo } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap={4}>
        <Icon as={HiMenu} boxSize={6} />
        <Image src={youtubeIcon} boxSize={95} color="orange.300" />
      </Flex>

      <SearchBar />
      <Flex alignItems="center" gap={6}>
        <Icon as={FaVideo} boxSize={5} />
        <Icon as={IoIosNotifications} boxSize={6} color="black" />
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
