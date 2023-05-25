import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoAPI } from "../store/videoSlice";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const VideoList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.video);
  useEffect(() => {
    dispatch(fetchVideoAPI());
  }, []);
  return (
    <div>
      <Grid
        paddingTop="3rem"
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={12}
        bord
        justifyItems="center"
      >
        {data.map((video) => (
          <Box
            key={video.propId}
            h={"180px"}
            w={"350px"}
            borderRadius="15px"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <Image
              key={video.postId}
              src={video.submission.thumbnail}
              alt="Video Thumbnail"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default VideoList;
