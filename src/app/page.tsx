import Link from "next/link";
import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MovieCardPages from "@/components/MovieCardPages";
import MovieCard from "@/components/MovieCard";

import { getMoviesbyList } from "@/lib/apis/movies";

async function Home() {
  const datasNowPlaying = await getMoviesbyList({ list: "now_playing" });
  const datasPopular = await getMoviesbyList({ list: "popular" });
  const datasTopRated = await getMoviesbyList({ list: "top_rated" });
  const datasUpcoming = await getMoviesbyList({ list: "upcoming" });

  return (
    <div className="flex flex-col space-y-10 pb-10">
      <div className="border-b">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Featured</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/movielist/popular"
          >
            SEE ALL
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center mb-4">
          {datasPopular?.results.map((movie) => (
            <MovieCardPages
              key={movie.id}
              data={movie}
              href={`/movies/detail/${movie.id}`}
            />
          ))}
        </div>
      </div>
      <div className="border-b">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Now Playing</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/movielist/now_playing"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 pt-4 pb-1 px-4 overflow-hidden mb-2">
            {datasNowPlaying?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/detail/${movie.id}`}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="border-b">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Top Rated</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/movielist/top_rated"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasTopRated?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/detail/${movie.id}`}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="border-b">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Upcoming</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/movielist/upcoming"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasUpcoming?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/detail/${movie.id}`}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

export default Home;
