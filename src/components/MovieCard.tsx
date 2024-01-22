import Image from "next/image";
import Link from "next/link";
import React from "react";

import { formatDate } from "@/lib/utils/formatter";
import { Movie } from "@/lib/apis/movies/type";

interface Props {
  data: Movie;
  href: string;
}

const MovieCard = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path, release_date } = data;

  return (
    <Link href={href}>
      <div className="w-[190px] h-fit flex flex-col bg-gradient-to-t from-white/0 to-white/0  dark:hover:from-indigo-800/30 dark:hover:to-indigo-100/20 px-2 pt-2 pb-5 scale-100 hover:scale-[1.01] rounded-md transition-all duration-200">
        <Image
          className="aspect-[2/3] object-cover rounded mb-3 shadow shadow-black dark:shadow-white"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `/images/default-movie-poster.png`
          }
          alt={title}
          width={190}
          height={290}
          priority
        />
        <h1 className="font-medium truncate">{title}</h1>
        <p className="text-xs text-muted-foreground font-light">
          {formatDate(release_date!)}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
