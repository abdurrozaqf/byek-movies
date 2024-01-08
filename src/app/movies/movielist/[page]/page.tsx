import { Metadata } from "next";
import React from "react";

import MovieCardPages from "@/components/MovieCardPages";

import { getMoviesPagination } from "@/lib/apis/movies";

type Props = {
  params: { page: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = params.page;

  return {
    title:
      `${
        page === "now_playing"
          ? "Now Playing"
          : page === "popular"
          ? "Popular"
          : page === "top_rated"
          ? "Top Rated"
          : page === "upcoming"
          ? "Upcoming"
          : ""
      }` + " | Byek!",
  };
}

async function Page({ params }: Props) {
  const datas = await getMoviesPagination({ list: params.page, page: 1 });

  return (
    <div className="pb-10">
      <p className="pl-4 border-x-4 border-red-600 text-center">{`${
        params.page === "now_playing"
          ? "Now Playing"
          : params.page === "popular"
          ? "Popular"
          : params.page === "top_rated"
          ? "Top Rated"
          : params.page === "upcoming"
          ? "Upcoming"
          : ""
      }`}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center">
        {datas.results.map((movie) => (
          <MovieCardPages
            key={movie.id}
            data={movie}
            href={`/movies/detail/${movie.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
