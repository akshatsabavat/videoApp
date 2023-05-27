import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { videoTitleGenerator } from "../helperfunctions/videoTitleGenerator";

import { IoIosShareAlt } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
const VideoPlayer = () => {
  const { videoDetails, creatorDetails } = useSelector(
    (state) => state.videoPlayer
  );
  return (
    <Container fontFamily="poppins" paddingTop="3rem" maxW="1200px">
      <div
        style={{
          width: "750px",
          height: "400px",
          backgroundColor: "black",
          borderBottom: "solid #000 10px",
          borderRadius: "12px",
        }}
      >
        <video controls style={{ width: "100%", height: "100%" }}>
          <source src={videoDetails.mediaUrl} type="video/mp4" />
        </video>
      </div>
      <Box marginTop={"20px"}>
        <Flex
          alignItems={"center"}
          gap={3}
          marginTop="15px"
          maxW="750px"
          justifyContent={"space-between"}
        >
          <Text fontFamily="poppins" fontWeight={500} fontSize="21px">
            {videoTitleGenerator()}
          </Text>
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
          marginTop="30px"
          maxW="750px"
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"} gap={4}>
            <Image width="8.5%" borderRadius="50%" src={creatorDetails.pic} />
            <Box>
              <Text fontWeight={600} fontSize="17px">
                {creatorDetails.handle}
              </Text>
              <Text color="gray.500" marginTop="-3px">
                15.7k subscribers
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
