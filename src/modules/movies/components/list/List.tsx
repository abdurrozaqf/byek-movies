import React, { lazy } from "react";

const ListMovie = lazy(() => import("./ListMovie"));

interface MovieListProps {
  list: string;
}

export default function MovieList({ list }: MovieListProps) {
  return (
    <>
      <ListMovie list={list} />
    </>
  );
}
