import { Box, Button, Circle, Flex, Icon } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setPaginationNext, setPaginationPrev } from "../store/paginationSlice";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";
import Navigator from "./Navigator";

const circleArray = [0, 1, 2];

const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <Flex justifyContent={"flex-end"} alignItems={"center"} gap={6}>
      <Icon
        onClick={() => {
          dispatch(setPaginationPrev());
        }}
        as={MdArrowCircleLeft}
        boxSize={6}
        color="red"
      />
      <Navigator circleArray={circleArray} />
      <Icon
        onClick={() => {
          dispatch(setPaginationNext());
        }}
        as={MdArrowCircleRight}
        boxSize={6}
        color="red"
      />
    </Flex>
  );
};

export default Pagination;
