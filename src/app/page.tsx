import axios from "axios";
import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MovieCard from "@/components/movie-card";

import { Response } from "@/lib/types/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getDataNowPlaying() {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as Response;
}
async function getDataPopular() {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as Response;
}
async function getDataTopRated() {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as Response;
}
async function getDataUpcoming() {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as Response;
}

async function Home() {
  const datasNowPlaying = await getDataNowPlaying();
  const datasPopular = await getDataPopular();
  const datasTopRated = await getDataTopRated();
  const datasUpcoming = await getDataUpcoming();

  return (
    <div className="flex flex-col space-y-10">
      <div className="border-b">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Now Playing</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/listmovie/now_playing"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 pt-4 pb-1 px-4 overflow-hidden mb-2">
            {datasNowPlaying.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/${movie.id}`}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="border-b">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Popular</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movie/popular"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasPopular.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/${movie.id}`}
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
            href="/movie/top_rated"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasTopRated.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/${movie.id}`}
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
            href="/movie/upcoming"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <div className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasUpcoming.results.map((movie) => (
              <MovieCard
                key={movie.id}
                data={movie}
                href={`/movies/${movie.id}`}
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
