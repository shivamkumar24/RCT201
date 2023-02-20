import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <h2>
        <Link href="/watchlist">WatchList</Link>
      </h2>
    </div>
  );
};

export default Navbar;
