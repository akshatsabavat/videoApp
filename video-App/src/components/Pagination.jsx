import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPaginationNext, setPaginationPrev } from "../store/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <Flex gap={10}>
      <Button
        onClick={() => {
          dispatch(setPaginationPrev());
        }}
      >
        Prev
      </Button>
      <Button
        onClick={() => {
          dispatch(setPaginationNext());
        }}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
