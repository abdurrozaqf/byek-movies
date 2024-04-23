import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { UserCircle } from "lucide-react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Container from "@/components/elements/Container";
import MovieCard from "@/components/MovieCard";
import { Badge } from "@/components/ui/badge";

import { getDetailMovie, getSimilarMovies } from "@/services/apis/movies";
import { formatDate, formatRuntime } from "@/utils/formatter";
import { Detail } from "@/modules/movies";

interface DetailMoviePageProps {
  params: { id: number };
}

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const movie = await getDetailMovie(params.id);
  return {
    title: movie.title + " | Byek! Movies",
  };
}

export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const similarMovies = await getSimilarMovies(params.id);
  const movie = await getDetailMovie(params.id);

  return (
    <section className="flex flex-col gap-6 items-center container">
      <div className="w-full flex justify-center relative rounded-2xl border overflow-hidden">
        <div className="w-[960px] h-[540px]">
          <iframe
            src={`https://www.youtube.com/embed/${movie.videos?.results[0]?.key}`}
            allowFullScreen
            title={movie.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="h-full w-full"
          />
        </div>
        <Image
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : `/images/default-movie-poster.png`
          }
          priority
          alt={movie.title}
          width="0"
          height="0"
          sizes="100vw"
          className="absolute top-0 left-0 -z-10 w-full rounded-md"
        />
      </div>
      <div className="w-full h-fit flex flex-col gap-6 p-6 mb-6 border rounded-2xl">
        <div className="w-full flex gap-6">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={140}
            height={200}
            className="hidden md:block"
          />
          <div className="w-full flex flex-col justify-between">
            <h1 className="text-2xl font-semibold leading-none flex flex-col">
              <span>{movie.title}</span>
              <span className="text-base font-light dark:text-slate-100 ">
                {movie.tagline}
              </span>
            </h1>
            <p className="text-xs font-light dark:text-slate-200 space-x-2">
              <span className="dark:text-slate-400">
                {formatDate(movie.release_date)}
              </span>
              <span>{movie.original_language.toUpperCase()}</span>
              <span>{formatRuntime(movie.runtime)}</span>
            </p>
            <hr />
            <div className="flex items-center gap-3">
              <p className="p-2 dark:bg-[#222121] bg-slate-200 w-fit my-2 rounded text-3xl font-bold">
                {movie.vote_average.toString().slice(0, 3)}
              </p>
              <p className="space-y-1">
                <span className="flex">
                  {Array.from({ length: movie.vote_average }).map(() => `⭐`)}
                </span>
                <span className="flex items-center gap-1 dark:text-slate-400 text-sm">
                  <UserCircle size={16} />
                  {movie.vote_count}
                  <span>votes</span>
                </span>
              </p>
            </div>
            <hr />
            <div className="flex gap-2 mt-4 md:mt-0">
              {movie.genres.map((genre) => (
                <Link key={genre.id} href={`/movies/genre/${genre.id}`}>
                  <Badge variant={"default"} className="cursor-pointer">
                    {genre.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="font-semibold text-2xl mb-6">Synopsis</h1>
          <p>{movie.overview}</p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Similar movies</h1>
          <hr />
          <ScrollArea className="h-auto w-full rounded-md">
            <ul className="flex h-fit w-max space-x-4 py-4 px-4 overflow-hidden mb-2">
              {similarMovies.results.map((movie) => (
                <li key={movie.id} className="w-[200px]">
                  <MovieCard data={movie} href={`/movies/detail/${movie.id}`} />
                </li>
              ))}
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <ScrollArea className="h-auto w-full rounded-md">
            <div className="flex gap-x-3 w-auto h-[250px]">
              {movie.videos?.results.map((item) => (
                <iframe
                  key={item.id}
                  src={`https://www.youtube.com/embed/${item.key}`}
                  allowFullScreen
                  title={movie.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="h-auto w-full"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
    // <>
    //   <Container>
    //     <Detail movie={movie} similarMovies={similarMovies} />
    //   </Container>
    // </>
  );
}
