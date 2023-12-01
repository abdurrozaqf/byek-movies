import axios from "axios";
import React from "react";
import Image from "next/image";

import { Response } from "@/lib/types/api";
import { Metadata } from "next";
import MovieCardPages from "@/components/movie-card-pages";

type Props = {
  params: { page: string };
};

async function getData(page: string) {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${page}?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as Response;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = params.page;

  const movie = await getData(page);

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

async function Page({ params }: { params: { page: string } }) {
  const datas = await getData(params.page);

  return (
    <div>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-4 justify-items-center">
        {datas.results.map((movie) => (
          <MovieCardPages
            key={movie.id}
            data={movie}
            href={`/movies/${movie.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
