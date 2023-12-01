import axios from "axios";
import React from "react";
import Image from "next/image";

import { MovieDetail } from "@/lib/types/movie";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { id: string };
};

async function getData(id: string) {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a936a84d935e7f41bcf12783a629026f`
  );

  return result.data as MovieDetail;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const movie = await getData(id);

  return {
    title: movie.title + " | Byek!",
  };
}

async function Page({ params }: { params: { id: string } }) {
  const movie = await getData(params.id);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="h-fit flex gap-14 p-10 border w-3/4 justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={300}
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold">{movie.title}</p>
            <div className="flex gap-1 mb-4 mt-2">
              {movie.genres.map((genre) => (
                <Badge
                  key={genre.id}
                  variant={"outline"}
                  className="bg-white text-black"
                >
                  {genre.name}
                </Badge>
              ))}
            </div>
            <p>Duration: {movie.runtime} Minutes</p>
            <p>{movie.overview}</p>
          </div>
          <Button>Watch Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
