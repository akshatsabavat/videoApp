import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import VideoPlayer from "./Pages/VideoPlayer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
