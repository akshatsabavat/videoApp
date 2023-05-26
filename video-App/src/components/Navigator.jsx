import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Navigator = ({ circleArray }) => {
  const page = useSelector((state) => state.pagination.page);
  return (
    <Flex gap={7}>
      {circleArray.map((circle, index) => (
        <Box
          key={index}
          w="8px"
          h="8px"
          borderRadius="50%"
          transition="transform 2s all"
          backgroundColor={page === index ? "red" : "red.200"}
        />
      ))}
    </Flex>
  );
};

Navigator.propTypes = {
  circleArray: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Navigator;
