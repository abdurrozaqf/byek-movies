import Image from "next/image";
import Link from "next/link";

import { UserCircle } from "lucide-react";

import { Movie } from "@/services/apis/movies";

type Props = {
  data: Movie;
};

export default function MovieCardHeader({ data }: Props) {
  return (
    <Link
      href={`/movies/detail/${data.id}`}
      className="w-full relative h-[720px]"
    >
      <Image
        src={
          data.backdrop_path
            ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            : `/images/default-movie-poster.png`
        }
        priority
        alt={data.title}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-[720px] object-cover object-top rounded"
      />
      <div className="absolute px-6 md:px-8 lg:px-20 pb-10 md:pb-0 top-0 w-full border h-[720px] bg-gradient-to-l from-black/0 to-black flex items-end md:items-center justify-center md:justify-start">
        <div className="hidden md:block">
          <div className="flex flex-col w-1/2 lg:w-1/4">
            <h1 className="flex flex-col gap-y-3">
              <span className="text-xl font-semibold text-white md:text-4xl">
                {data.title}
              </span>
              <span className="flex items-center gap-x-2">
                <span className="p-1 text-xs font-bold text-black bg-yellow-500 rounded w-fit">
                  IMDB
                </span>
                <span className="mr-4 md:mr-8 text-slate-300">
                  {data.vote_average.toString().slice(0, 3)}
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-300">
                  <UserCircle size={16} />
                  {data.vote_count}
                  <span>votes</span>
                </span>
              </span>
              <span className="text-base font-light text-slate-100">
                {data.overview}
              </span>
            </h1>
          </div>
        </div>
        <div className="block md:hidden">
          <h1 className="flex flex-col items-center w-full gap-y-3">
            <span className="text-3xl font-semibold text-center text-white">
              {data.title}
            </span>
            <span className="flex items-center gap-x-2">
              <span className="p-1 text-xs font-bold text-black bg-yellow-500 rounded w-fit">
                IMDB
              </span>
              <span className="mr-4 text-slate-300">
                {data.vote_average.toString().slice(0, 3)}
              </span>
              <span className="flex items-center gap-1 text-sm text-slate-300">
                <UserCircle size={16} />
                {data.vote_count}
                <span>votes</span>
              </span>
            </span>
            <span className="text-xs font-light text-justify text-slate-100">
              {data.overview}
            </span>
          </h1>
        </div>
      </div>
    </Link>
  );
}
