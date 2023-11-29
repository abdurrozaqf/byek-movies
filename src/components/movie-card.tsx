import Link from "next/link";
import React from "react";

import { Movie } from "@/lib/types/movie";

interface Props {
  data: Movie;
  href: string;
}

const MovieCard = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path } = data;

  return (
    <div className="p-5 bg-gradient-to-t dark:from-indigo-800/30 dark:to-indigo-950/0 rounded-md scale-100 hover:scale-[1.03] transition-all border dark:border-white/25">
      <Link href={href}>
        {/* <Image
          className="aspect-[2/3] object-cover"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={500}
          height={600}
        /> */}
        <img
          className="aspect-[2/3] object-cover mb-4"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={500}
          height={600}
        />
      </Link>
      <Link className="text-center dark:text-white" href={href}>
        {title}
      </Link>
    </div>
  );
};

export default MovieCard;
