import React, { useState } from "react";
import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { addPost } from "./posts.api";
import useDeleyedAPI from "../../Hooks/useDeleyedAPI";
import { useEffect } from "react";

const AddPost = ({ onAddPost }) => {
  const toast = useToast();

  const { loading, error, success, data, execute } = useDeleyedAPI(addPost, {});

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (success) {
      toast({
        title: `Post added successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onAddPost(data);
    }

    if (error) {
      toast({
        title: "Error Occurred while trying to add Post",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [success, error, toast]);

  return (
    <Center>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button
        onClick={() => execute({ content: message })}
        colorScheme="green"
        isLoading={loading}
      >
        Add
      </Button>
    </Center>
  );
};

export default AddPost;
