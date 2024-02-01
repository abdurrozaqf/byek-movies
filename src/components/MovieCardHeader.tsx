import { Movie } from "@/lib/apis/movies";
import { UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

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
      <div className="absolute px-8 md:px-20 top-0 w-full border h-[720px] bg-gradient-to-l from-black/0 to-black flex items-center justify-start">
        <div className="w-1/4 flex flex-col">
          <h1 className="flex flex-col gap-y-3">
            <span className="text-4xl font-semibold text-white">
              {data.title}
            </span>
            <span className="flex items-center gap-x-2">
              <span className="bg-yellow-500 w-fit text-black rounded font-bold p-1 text-xs">
                IMDB
              </span>
              <span className="mr-8 text-slate-300">
                {data.vote_average.toString().slice(0, 3)}
              </span>
              <span className="flex items-center gap-1 text-slate-300 text-sm">
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
    </Link>
  );
}
