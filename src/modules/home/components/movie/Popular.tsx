import Link from "next/link";
import React from "react";

import MovieCardPages from "@/components/elements/MovieCardPages";
import { Response } from "@/common/types/api";
import { Movie } from "@/common/types/movie";

interface PopularProps {
  title?: string;
  datas: Response<Movie[]>;
}

export default function Popular({ title, datas }: PopularProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="pl-4 border-l-4 border-red-600">Featured</p>
        <Link
          className="bg-red-600 text-white text-sm p-[0.3rem] rounded-md leading-none cursor-pointer"
          href="/movies/popular"
        >
          SEE ALL
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-6 pt-6 mb-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {datas?.results.map((movie) => (
          <li key={movie.id}>
            <MovieCardPages data={movie} href={`/movies/detail/${movie.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
