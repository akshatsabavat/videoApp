import PropTypes from "prop-types";

const Player = ({ mediaLink }) => {
  return (
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
        <source src={mediaLink} type="video/mp4" />
      </video>
    </div>
  );
};

Player.propTypes = {
  mediaLink: PropTypes.string.isRequired,
};

export default Player;
