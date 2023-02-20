//  API: https://movies-database-gold.vercel.app/movies
import { useRouter } from "next/router";
import axios from "axios";
import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";

const Movie = ({ movie }) => {
  const router = useRouter();
  //   console.log(movie);

  const addToWatchList = (payloadData) => {
    // console.log(payloadData);
    try {
      axios.post(`http://localhost:8080/watchlist`, payloadData);
    } catch (e) {
      console.log("Post-Error:", e);
    }

    router.push("/watchlist");
  };

  return (
    <Container maxW={"7xl"}>
      <Flex>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={movie.Images[0]}
          fit={"cover"}
          align={"center"}
          w="400px"
          h="300px"
        />
      </Flex>
      <Stack>
        <Box as={"header"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            Title: {movie.Title}
          </Heading>
          <Text color="gray" fontWeight={300} fontSize={"2xl"}>
            Release-Year: {movie.Year}
          </Text>
        </Box>

        <Stack w="400px">
          <Text color="gray" fontSize={"2xl"} fontWeight={"300"}>
            Actors: {movie.Actors}
          </Text>
          <Text fontSize={"lg"}>{movie.Plot}</Text>
        </Stack>

        <Button
          w="400px"
          mt={8}
          size={"lg"}
          cursor="pointer"
          py={"7"}
          bg="gray"
          color="black"
          fontWeight="bold"
          textTransform={"uppercase"}
          onClick={() => addToWatchList(movie)}
        >
          Add to watchlist
        </Button>
      </Stack>
    </Container>
  );
};

export default Movie;

export async function getStaticPaths() {
  let res = await fetch(`https://movies-database-gold.vercel.app/movies`);
  let data = await res.json();

  return {
    paths: data.map((movie) => ({ params: { id: String(movie.id) } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  let id = context.params.id;
  //   console.log(id);
  let res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`);
  let data1 = await res.json();
  return {
    props: {
      movie: data1,
    },
  };
}
