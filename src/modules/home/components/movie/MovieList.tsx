import React from "react";

import Container from "@/components/elements/Container";
import { Separator } from "@/components/ui/separator";
import NowPlaying from "./NowPlaying";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
import Popular from "./Popular";

import { Response } from "@/common/types/api";
import { Movie } from "@/common/types/movie";

interface MovieListProps {
  dataPopular: Response<Movie[]>;
  dataNowPlaying: Response<Movie[]>;
  dataTopRated: Response<Movie[]>;
  dataUpcoming: Response<Movie[]>;
}

export default function MovieList({
  dataPopular,
  dataNowPlaying,
  dataTopRated,
  dataUpcoming,
}: MovieListProps) {
  return (
    <Container>
      <section className="space-y-20">
        <Popular datas={dataPopular} />
        <Separator />
        <NowPlaying datas={dataNowPlaying} />
        <TopRated datas={dataTopRated} />
        <Upcoming datas={dataUpcoming} />
      </section>
    </Container>
  );
}
