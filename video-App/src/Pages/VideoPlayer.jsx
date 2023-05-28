import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { videoTitleGenerator } from "../helperfunctions/videoTitleGenerator";

import { IoIosShareAlt } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import Player from "../components/videoPlayerComponents/Player";
import { setSubsciption } from "../store/subscriptionSlice";

const VideoPlayer = () => {
  const dispatch = useDispatch();
  const { videoDetails, creatorDetails } = useSelector(
    (state) => state.videoPlayer
  );
  return (
    <Container fontFamily="poppins" paddingTop="3rem" maxW="1200px">
      <Player mediaLink={videoDetails.mediaUrl} />
      <Box marginTop={"25px"}>
        <Flex
          alignItems={"center"}
          gap={3}
          marginTop="15px"
          maxW="750px"
          justifyContent={"space-between"}
        >
          <Box>
            <Text fontFamily="poppins" fontWeight={500} fontSize="22px">
              {videoTitleGenerator()}
            </Text>
            <Text marginTop="5px">
              {Math.floor(Math.random() * 100) + 100},
              {Math.floor(Math.random() * 100) + 100} views
            </Text>
          </Box>
          <Flex fontSize="15px" gap={6}>
            <Flex
              _hover={{
                cursor: "pointer",
                color: "red",
                transition: "all 0.3s",
              }}
              gap={2}
              alignItems={"center"}
            >
              <Icon boxSize={6} as={IoIosShareAlt} />
              Share
            </Flex>
            <Flex
              _hover={{
                cursor: "pointer",
                color: "red",
                transition: "all 0.3s",
              }}
              gap={2}
              alignItems={"center"}
            >
              <Icon boxSize={6} as={HiDownload} />
              Download
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={3}
          marginTop="25px"
          maxW="750px"
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"} gap={4}>
            <Image width="8.5%" borderRadius="50%" src={creatorDetails.pic} />
            <Box>
              <Text fontWeight={600} fontSize="17px">
                {creatorDetails.handle}
              </Text>
              <Text color="gray.500">
                {Math.floor(Math.random() * 900) + 100}k subscribers
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center">
            <Icon
              _hover={{
                cursor: "pointer",
                color: "red",
                transition: "all 0.3s",
              }}
              color="gray.500"
              boxSize={6}
              as={MdNotificationsActive}
            />
            <Button
              marginLeft="20px"
              paddingX="35px"
              backgroundColor="white"
              border="solid 2px red"
              fontFamily="poppins"
              color="red"
              fontSize="15px"
              _hover={{
                color: "white",
                background: "red",
              }}
              onClick={() => {
                dispatch(setSubsciption(creatorDetails));
              }}
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default VideoPlayer;
