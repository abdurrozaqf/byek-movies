import { Metadata } from "next";
import React from "react";

import MovieCardPages from "@/components/MovieCardPages";

import { getMoviesPagination } from "@/lib/apis/movies";

type Props = {
  params: { movielist: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movielist = params.movielist;

  return {
    title:
      `${
        movielist === "now_playing"
          ? "Now Playing"
          : movielist === "popular"
          ? "Popular"
          : movielist === "top_rated"
          ? "Top Rated"
          : movielist === "upcoming"
          ? "Upcoming"
          : ""
      }` + " | Byek!",
  };
}

async function Page({ params }: Props) {
  const datas = await getMoviesPagination({ list: params.movielist, page: 1 });

  return (
    <section className="pb-10">
      <p className="pl-4 border-x-4 border-red-600 text-center">{`${
        params.movielist === "now_playing"
          ? "Now Playing"
          : params.movielist === "popular"
          ? "Popular"
          : params.movielist === "top_rated"
          ? "Top Rated"
          : params.movielist === "upcoming"
          ? "Upcoming"
          : ""
      }`}</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center">
        {datas.results.map((movie) => (
          <li key={movie.id}>
            <MovieCardPages data={movie} href={`/movies/detail/${movie.id}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Page;
