import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoAPI } from "../store/videoSlice";

import { Grid, CircularProgress } from "@chakra-ui/react";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.video);
  const page = useSelector((state) => state.pagination.page);
  const subs = useSelector((state) => state.subscription.subscriptions);
  useEffect(() => {
    dispatch(fetchVideoAPI(page));
  }, [page]);
  console.log(subs);
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
            <VideoCard
              creatorPic={video.creator.pic}
              videoDetails={video.submission}
              creatorDetails={video.creator}
              key={video.postId}
              thumbnail={video.submission.thumbnail}
              creatorHandle={video.creator.handle}
            />
          ))
        )}
      </Grid>
    </div>
  );
};

export default VideoList;
