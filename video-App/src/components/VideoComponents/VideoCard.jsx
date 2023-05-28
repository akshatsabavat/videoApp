import { BsFillStopwatchFill } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { videoTitleGenerator } from "../../helperfunctions/videoTitleGenerator";

import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  setCreatorDetails,
  setVideoDetails,
} from "../../store/videoPlayerSlice";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const VideoCard = ({
  thumbnail,
  creatorHandle,
  videoDetails,
  creatorDetails,
  creatorPic,
}) => {
  const dispatch = useDispatch();
  return (
    <Box fontFamily="Eudoxus Sans">
      <Link to={"/video"}>
        <Box
          onClick={() => {
            dispatch(setVideoDetails(videoDetails));
            dispatch(setCreatorDetails(creatorDetails));
          }}
          h={"200px"}
          w={"350px"}
          borderRadius="15px"
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          style={{ position: "relative", overflow: "hidden" }}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.01)",
          }}
          transition="transform 0.3s ease-in-out"
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
            _hover={{
              opacity: 0,
            }}
            transition="opacity 0.2s ease-in-out"
          />
          <Flex position="absolute" top="5" left="4" gap={3}>
            <Icon as={BsFillStopwatchFill} color="white" boxSize={6} />
            <Icon as={RiPlayList2Fill} color="white" boxSize={6} />
          </Flex>
        </Box>
      </Link>
      <Flex marginTop="25px" alignItems={"flex-start"} gap={4}>
        <Image height="40px" width="40px" borderRadius="50%" src={creatorPic} />
        <Box>
          <Text fontSize={"xl"} color="blackAlpha.800" fontWeight={600}>
            {videoTitleGenerator()}
          </Text>
          <Flex marginTop="3px" gap={2} alignItems={"center"}>
            <Text fontSize="15px">{creatorHandle}</Text>
            <Icon boxSize={5} color="blue.500" as={MdVerified} />
          </Flex>
          <Text fontSize="15px">46k views • 15 hours ago</Text>
        </Box>
      </Flex>
    </Box>
  );
};

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  creatorHandle: PropTypes.string.isRequired,
  videoDetails: PropTypes.object.isRequired,
  creatorDetails: PropTypes.object.isRequired,
  creatorPic: PropTypes.string.isRequired,
};

export default VideoCard;
