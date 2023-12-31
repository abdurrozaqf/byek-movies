import Image from "next/image";
import Link from "next/link";
import React from "react";

import { formatDate } from "@/lib/utils/formatter";
import { Movie } from "@/lib/apis/movies/type";

interface Props {
  data: Movie;
  href: string;
}

const MovieCardPages = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path, release_date } = data;

  return (
    <Link href={href}>
      <div className="w-[250px] h-full bg-gradient-to-t from-white/0 to-white/0  dark:hover:from-indigo-800/30 dark:hover:to-indigo-100/20 px-2 pt-2 pb-5 scale-100 hover:scale-[1.01] rounded-md transition-all duration-200">
        <Image
          className="aspect-[2/3] object-cover rounded mb-3 shadow shadow-black dark:shadow-white"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={250}
          height={300}
        />
        <p className="font-medium truncate">{title}</p>
        <p className="text-xs text-muted-foreground font-light">
          {formatDate(release_date!)}
        </p>
      </div>
    </Link>
  );
};

export default MovieCardPages;
