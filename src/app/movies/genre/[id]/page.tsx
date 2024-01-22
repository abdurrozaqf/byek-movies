import React from "react";

import { ChevronLeft } from "lucide-react";

import MovieCardPages from "@/components/MovieCardPages";

import { getMoviesGenre } from "@/lib/apis/movies";

type Props = {
  params: { id: number };
};

async function Page({ params }: Props) {
  const movies = await getMoviesGenre(params.id);

  return (
    <div className="pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center">
        {movies.results.map((movie) => (
          <MovieCardPages
            key={movie.id}
            data={movie}
            href={`/movies/detail/${movie.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
