import axios from "axios";
import React from "react";

import MovieCard from "@/components/movie-card";

import { Response } from "@/lib/types/api";

async function getData() {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as Response;
}

async function Home() {
  const datas = await getData();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-5">
      {datas.results.map((movie) => (
        <MovieCard key={movie.id} data={movie} href={`/movies/${movie.id}`} />
      ))}
    </div>
  );
}

export default Home;
