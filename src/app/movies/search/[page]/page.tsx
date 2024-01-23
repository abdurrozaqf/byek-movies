import { Metadata } from "next";
import React from "react";

import MovieCardPages from "@/components/MovieCardPages";

import { getMovies } from "@/lib/apis/movies";

type Props = {
  params: { page: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = params.page;

  return {
    title: page,
  };
}

async function Page({ params }: Props) {
  const datas = await getMovies({ name: params.page });

  return (
    <section className="pb-10">
      <p className="pl-4 border-x-4 border-red-600 text-center">
        Result found: {decodeURIComponent(params.page)}
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center">
        {datas.results.map((movie) => (
          <li key={movie.id}>
            <MovieCardPages data={movie} href={`/movies/${movie.id}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Page;
