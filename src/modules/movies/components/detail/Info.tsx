import { UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { formatDate, formatRuntime } from "@/utils/formatter";
import { MovieDetail } from "@/common/types/movie";

interface Props {
  data: MovieDetail;
}

export default function Info({ data: movie }: Props) {
  return (
    <div className="flex flex-col w-full gap-6 p-6 mb-6 h-fit">
      <div className="flex w-full gap-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={140}
          height={200}
          className="hidden md:block"
        />
        <div className="flex flex-col justify-between w-full">
          <h1 className="flex flex-col text-2xl font-semibold leading-none">
            <span>{movie.title}</span>
            <span className="text-base font-light dark:text-slate-100 ">
              {movie.tagline}
            </span>
          </h1>
          <p className="space-x-2 text-xs font-light dark:text-slate-200">
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
              <span className="flex items-center gap-1 text-sm dark:text-slate-400">
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
        <h1 className="mb-6 text-2xl font-semibold">Synopsis</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
