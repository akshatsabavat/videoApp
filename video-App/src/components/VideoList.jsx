import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoAPI } from "../store/videoSlice";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const VideoList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.video);
  useEffect(() => {
    dispatch(fetchVideoAPI());
  }, []);
  return (
    <div>
      {data.map((video) => (
        <Box
          key={video.propsId}
          maxW="sm"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
        >
          <Image src={video.submission.thumbnail} alt="Video Thumbnail" />
          <Box p="4" boxSize={10}>
            <Text fontWeight="bold" fontSize="lg" mb="2" lineHeight="short">
              {video.submission.title}
            </Text>
            <Flex alignItems="center" mb="2">
              <Image
                src={video.creator.pic}
                alt={video.creator.name}
                boxSize="8"
                borderRadius="full"
                mr="2"
              />
              <Text fontSize="sm">{video.creator.name}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.500">
              6k views
            </Text>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default VideoList;
