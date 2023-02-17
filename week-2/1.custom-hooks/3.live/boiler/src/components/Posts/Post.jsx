import React, { useEffect } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { deletePost } from "./posts.api";
import useDeleyedAPI from "../../Hooks/useDeleyedAPI";

const Post = ({ id, content, onDelete }) => {
  const toast = useToast();

  const { loading, error, success, execute } = useDeleyedAPI(deletePost, {});

  useEffect(() => {
    if (success) {
      toast({
        title: `Post with id: ${id}, deleted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onDelete(id);
    }

    if (error) {
      toast({
        title: "Error Occurred while fetching data",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [success, error, toast]);

  return (
    <Flex gap={2}>
      <Box>{content}</Box>
      <Button
        size="sm"
        isLoading={loading}
        loadingText="Deleting..."
        onClick={() => execute(id)}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default Post;
