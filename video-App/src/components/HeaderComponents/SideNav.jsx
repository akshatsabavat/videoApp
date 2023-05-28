import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

import { AiFillHome } from "react-icons/ai";
import {
  MdSubscriptions,
  MdTrendingUp,
  MdLibraryAdd,
  MdOutlineHistory,
  MdOutlineVideoSettings,
  MdWatchLater,
} from "react-icons/md";

import PropTypes from "prop-types";

const dashboardItemsListOne = [
  {
    id: 1,
    label: "Home",
    name: "Home",
    ICON: AiFillHome,
  },
  {
    id: 2,
    label: "Trending",
    name: "Trending",
    ICON: MdTrendingUp,
  },
  {
    id: 3,
    label: "Subscriptions",
    name: "Subscriptions",
    ICON: MdSubscriptions,
  },
];

const dashboardItemsListTwo = [
  {
    id: 1,
    label: "Library",
    name: "Library",
    ICON: MdLibraryAdd,
  },
  {
    id: 2,
    label: "History",
    name: "History",
    ICON: MdOutlineHistory,
  },
  {
    id: 3,
    label: "My videos",
    name: "My videos",
    ICON: MdOutlineVideoSettings,
  },
  {
    id: 4,
    label: "Watch later",
    name: "Watch later",
    ICON: MdWatchLater,
  },
];

const SideNav = ({ drawerState, setDrawerState, headerIcon, subs }) => {
  const onClose = () => {
    setDrawerState(false);
  };

  SideNav.propTypes = {
    drawerState: PropTypes.bool.isRequired,
    setDrawerState: PropTypes.func.isRequired,
    headerIcon: PropTypes.string.isRequired,
    subs: PropTypes.array.isRequired,
  };

  return (
    <Drawer isOpen={drawerState} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Image
            onClick={() => (window.location.href = "/")}
            _hover={{
              cursor: "pointer",
            }}
            src={headerIcon}
            boxSize={110}
            color="orange.300"
          />
        </DrawerHeader>

        <DrawerBody>
          <VStack
            gap={1}
            fontSize="16px"
            fontFamily="Eudoxus Sans"
            alignItems="flex-start"
          >
            {dashboardItemsListOne.map((item) => {
              return (
                <Tooltip
                  key={item.id}
                  hasArrow
                  marginLeft="10px"
                  backgroundColor="gray.200"
                  color="black"
                  placement="right"
                  label={item.label}
                >
                  <Flex
                    _hover={{
                      color: "red",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                    gap={4}
                    alignItems="center"
                  >
                    <Icon as={item.ICON} />
                    <Text>{item.name}</Text>
                  </Flex>
                </Tooltip>
              );
            })}
          </VStack>
          <Divider my={"1rem"} height="1px" backgroundColor="gray.300" />
          <VStack
            gap={1}
            fontSize="16px"
            fontFamily="Eudoxus Sans"
            alignItems="flex-start"
          >
            {dashboardItemsListTwo.map((item) => {
              return (
                <Tooltip
                  key={item.id}
                  hasArrow
                  marginLeft="10px"
                  backgroundColor="gray.200"
                  color="black"
                  placement="right"
                  label={item.label}
                >
                  <Flex
                    _hover={{
                      color: "red",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                    gap={4}
                    alignItems="center"
                  >
                    <Icon as={item.ICON} />
                    <Text>{item.name}</Text>
                  </Flex>
                </Tooltip>
              );
            })}
          </VStack>
          <Divider my={"1rem"} height="1px" backgroundColor="gray.300" />
          <Text
            fontSize="17px"
            onClick={() => {
              console.log(subs);
            }}
          >
            Subscriptions
          </Text>
          <Box marginTop={"15px"}>
            {subs.map((sub) => {
              return (
                <Flex
                  marginBottom="20px"
                  alignItems="center"
                  gap={"15px"}
                  key={sub.id}
                >
                  <Image borderRadius="50%" height="30px" src={sub.pic} />
                  <Text fontSize="15px">{sub.handle}</Text>
                </Flex>
              );
            })}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNav;
