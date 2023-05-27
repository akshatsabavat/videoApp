import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const { videoDetails, creatorDetails } = useSelector(
    (state) => state.videoPlayer
  );
  return (
    <Container paddingTop="3rem" maxW="1200px">
      <p>{creatorDetails.handle}</p>
      <p>{videoDetails.mediaUrl}</p>
      <div style={{ width: "800px", height: "400px" }}>
        <video controls style={{ width: "100%", height: "100%" }}>
          <source
            src="https://cdn.gro.care/755d5af44c54_1683463531570.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Container>
  );
};

export default VideoPlayer;
