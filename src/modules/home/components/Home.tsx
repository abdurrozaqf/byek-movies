import React from "react";
import MovieList from "./movie";

import CarouselHeader from "./CarouselHeader";
import { Response } from "@/common/types/api";
import { Movie } from "@/common/types/movie";

interface HomePageProps {
  popular: Response<Movie[]>;
  now_playing: Response<Movie[]>;
  top_rated: Response<Movie[]>;
  upcoming: Response<Movie[]>;
}

export default function HomePage({
  popular,
  now_playing,
  top_rated,
  upcoming,
}: HomePageProps) {
  return (
    <>
      <CarouselHeader />
      <MovieList
        dataPopular={popular}
        dataNowPlaying={now_playing}
        dataTopRated={top_rated}
        dataUpcoming={upcoming}
      />
    </>
  );
}
