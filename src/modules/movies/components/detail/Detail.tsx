import React from "react";

import { Separator } from "@/components/ui/separator";
import Similar from "./Similar";
import Trailer from "./Trailer";
import Header from "./Header";
import Cast from "./Cast";
import Info from "./Info";

import { Movie, MovieDetail } from "@/common/types/movie";
import { Response } from "@/common/types/api";

interface Props {
  movie: MovieDetail;
  similarMovies: Response<Movie[]>;
}

export default function Detail({ movie, similarMovies }: Props) {
  return (
    <>
      <Header data={movie} />
      <Separator className="my-6" />
      <Info data={movie} />
      <Separator className="my-6" />
      <Similar data={similarMovies} />
      <Separator className="my-6" />
      <Trailer data={movie} />
      <Separator className="my-6" />
      {/* <Cast data={movie} /> */}
    </>
  );
}
