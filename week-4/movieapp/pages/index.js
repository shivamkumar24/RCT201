import {
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home({ movies }) {
  const router = useRouter();

  const handleRoute = (id) => {
    router.push("/movie/" + id);
  };
  //   const [movieData, setMovieData] = useState([]);

  //   const getMovies = () => {
  //     axios
  //       .get(`https://movies-database-gold.vercel.app/movies`)
  //       .then((res) => setMovieData(res.data));
  //   };

  //   useEffect(() => {
  //     getMovies();
  //   }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Heading>Movies</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {movies.map((el) => (
          <Card key={el.id} onClick={() => handleRoute(el.id)}>
            <CardBody w="90%" border="1px solid black">
              <Image
                w="100%"
                height="300px"
                src={el.Images[0]}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.Title}</Heading>
                <Text>{el.Plot}</Text>
                <Text color="blue.600" fontSize="2xl">
                  Rating: {el.imdbRating}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  let res = await fetch(`https://movies-database-gold.vercel.app/movies`);
  let data1 = await res.json();
  return {
    props: {
      movies: data1,
    },
  };
}
