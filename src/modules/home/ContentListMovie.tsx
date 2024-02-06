import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MovieCardPages from "@/components/MovieCardPages";
import MovieCard from "@/components/MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 mb-4">
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-auto w-full rounded-md"
        >
          <div className="flex justify-between items-center">
            <p className="pl-4 border-l-4 border-red-600">Now Playing</p>
            <div className="flex items-center gap-x-8">
              <Link
                className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer relative"
                href="/movies/now_playing"
              >
                SEE ALL
              </Link>
              <div>
                <CarouselPrevious className="relative -left-2 top-0 -translate-y-0 h-6 w-6" />
                <CarouselNext className="relative -right-0 top-0 -translate-y-0 h-6 w-6" />
              </div>
            </div>
          </div>
          <CarouselContent className="py-4">
            {datasNowPlaying?.results.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              >
                <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="border-b mb-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-auto w-full rounded-md"
        >
          <div className="flex justify-between items-center">
            <p className="pl-4 border-l-4 border-red-600">Top Rated</p>
            <div className="flex items-center gap-x-8">
              <Link
                className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer relative"
                href="/movies/top_rated"
              >
                SEE ALL
              </Link>
              <div>
                <CarouselPrevious className="relative -left-2 top-0 -translate-y-0 h-6 w-6" />
                <CarouselNext className="relative -right-0 top-0 -translate-y-0 h-6 w-6" />
              </div>
            </div>
          </div>
          <CarouselContent className="py-4">
            {datasTopRated?.results.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              >
                <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="border-b mb-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-auto w-full rounded-md"
        >
          <div className="flex justify-between items-center">
            <p className="pl-4 border-l-4 border-red-600">Upcoming</p>
            <div className="flex items-center gap-x-8">
              <Link
                className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer relative"
                href="/movies/upcoming"
              >
                SEE ALL
              </Link>
              <div>
                <CarouselPrevious className="relative -left-2 top-0 -translate-y-0 h-6 w-6" />
                <CarouselNext className="relative -right-0 top-0 -translate-y-0 h-6 w-6" />
              </div>
            </div>
          </div>
          <CarouselContent className="py-4">
            {datasUpcoming?.results.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              >
                <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
