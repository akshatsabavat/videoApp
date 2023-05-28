import { Flex, Icon, Avatar, Image, Container } from "@chakra-ui/react";

import youtubeIcon from "../../assets/YouTubeLogo.svg";
import { FaVideo } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import SearchBar from "./SearchBar";
import SideNav from "./SideNav";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerState, setDrawerState] = useState(false);
  const subs = useSelector((state) => state.subscription.subscriptions);

  return (
    <Container maxW="1200px">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap={4}>
          <Icon
            onClick={() => {
              setDrawerState(true);
            }}
            as={HiMenu}
            boxSize={6}
          />
          <Image
            onClick={() => (window.location.href = "/")}
            _hover={{
              cursor: "pointer",
            }}
            src={youtubeIcon}
            boxSize={95}
            color="orange.300"
          />
          <SideNav
            subs={subs}
            headerIcon={youtubeIcon}
            drawerState={drawerState}
            setDrawerState={setDrawerState}
          />
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
    </Container>
  );
};

export default Navbar;
