import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoAPI } from "../store/videoSlice";

import {
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import { BsFillStopwatchFill } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { videoTitleGenerator } from "../helperfunctions/videoTitleGenerator";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { setCreatorDetails, setVideoDetails } from "../store/videoPlayerSlice";

const VideoList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.video);
  const page = useSelector((state) => state.pagination.page);
  const subs = useSelector((state) => state.subscription.subscriptions);
  useEffect(() => {
    dispatch(fetchVideoAPI(page));
  }, [page]);
  return (
    <div>
      <Grid
        paddingTop="3rem"
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={12}
        bord
        justifyItems="center"
      >
        {status === "loading" ? (
          <CircularProgress color="red" isIndeterminate />
        ) : (
          data.map((video) => (
            // <VideoCard
            //   key={video.postId}
            //   thumbnail={video.submission.thumbnail}
            //   creatorName={video.creator.name}
            // />
            <Box key={video.postId} fontFamily="poppins">
              <Link to={"/video"}>
                <Box
                  onClick={() => {
                    dispatch(setVideoDetails(video.submission));
                    dispatch(setCreatorDetails(video.creator));
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
                    src={video.submission.thumbnail}
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
              <Text marginTop={4} fontSize={"xl"} fontWeight={500}>
                {videoTitleGenerator()}
              </Text>
              <Text>{video.creator.handle}</Text>
            </Box>
          ))
        )}
      </Grid>
    </div>
  );
};

export default VideoList;
