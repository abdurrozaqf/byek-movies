import React, { lazy } from "react";

const GenreList = lazy(() => import("./GenreList"));

interface GenreProps {
  genre_id: number;
}

export default function Genre({ genre_id }: GenreProps) {
  return (
    <>
      <GenreList genre_id={genre_id} />
    </>
  );
}
