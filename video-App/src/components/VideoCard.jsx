import { BsFillStopwatchFill } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { videoTitleGenerator } from "../helperfunctions/videoTitleGenerator";

import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";

const VideoCard = ({ thumbnail, creatorName }) => {
  return (
    <Box fontFamily="poppins">
      <Box
        h={"200px"}
        w={"350px"}
        borderRadius="15px"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Image
          src={thumbnail}
          alt="Video Thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />{" "}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          h="100%"
          p="4"
          bgGradient="linear(to-t, rgba(0, 0, 0, 0.2), transparent)"
          _before={{
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <Flex position="absolute" top="5" left="4" gap={3}>
          <Icon as={BsFillStopwatchFill} color="white" boxSize={6} />
          <Icon as={RiPlayList2Fill} color="white" boxSize={6} />
        </Flex>
      </Box>
      <Text marginTop={4} fontSize={"xl"} fontWeight={500}>
        {videoTitleGenerator()}
      </Text>
      <Text>{creatorName}</Text>
    </Box>
  );
};

export default VideoCard;