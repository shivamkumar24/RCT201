import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Watchlist = ({ data1 }) => {
  console.log(data1);
  const router = useRouter();

  const deleteWatchListMovie = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/watchlist/${id}`);
    } catch (e) {
      console.log("DeleteWatchListMovieError:", e);
    }
    router.push("/watchlist");
  };

  return (
    <div>
      <Heading>WatchList</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Movie Name</Th>
              <Th>Release</Th>
              <Th>Rating</Th>
              <Th>Language</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data1.map((el) => (
              <Tr key={el.id}>
                <Td>{el.Title}</Td>
                <Td>{el.Released}</Td>
                <Td>{el.imdbRating}</Td>
                <Td>{el.Language}</Td>
                <Td>
                  <button onClick={() => deleteWatchListMovie(el.id)}>
                    Remove
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Watchlist;

export async function getStaticProps() {
  let res = await fetch(`http://localhost:8080/watchlist`);
  let data = await res.json();
  return {
    props: {
      data1: data,
    },
  };
}
