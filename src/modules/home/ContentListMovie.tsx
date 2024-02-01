import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MovieCardPages from "@/components/MovieCardPages";
import MovieCard from "@/components/MovieCard";

import { getMoviesbyList } from "@/libs/apis/movies/api";

export default async function ContentListMovie() {
  const datasNowPlaying = await getMoviesbyList({ list: "now_playing" });
  const datasTopRated = await getMoviesbyList({ list: "top_rated" });
  const datasUpcoming = await getMoviesbyList({ list: "upcoming" });
  const datasPopular = await getMoviesbyList({ list: "popular" });

  return (
    <div className="flex flex-col container">
      <div className="border-b mb-10">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Featured</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/popular"
          >
            SEE ALL
          </Link>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center mb-4">
          {datasPopular?.results.map((movie) => (
            <li key={movie.id}>
              <MovieCardPages
                data={movie}
                href={`/movies/detail/${movie.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b mb-10">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Now Playing</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/now_playing"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <ul className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasNowPlaying?.results.map((movie) => (
              <li key={movie.id}>
                <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="border-b mb-10">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Top Rated</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/top_rated"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <ul className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasTopRated?.results.map((movie) => (
              <li key={movie.id}>
                <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="border-b mb-10">
        <div className="flex justify-between items-center">
          <p className="pl-4 border-l-4 border-red-600">Upcoming</p>
          <Link
            className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
            href="/movies/upcoming"
          >
            SEE ALL
          </Link>
        </div>
        <ScrollArea className="h-auto w-full rounded-md">
          <ul className="flex h-fit w-max space-x-4 p-4 overflow-hidden mb-2">
            {datasUpcoming?.results.map((movie) => (
              <li key={movie.id}>
                <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
