import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Movie } from "@/lib/types/movie";
import { format, parseISO } from "date-fns";

interface Props {
  data: Movie;
  href: string;
}

const MovieCard = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path, release_date } = data;

  return (
    <Link href={href}>
      <div className="w-[12rem] h-fit flex flex-col bg-gradient-to-t from-white/0 to-white/0  dark:hover:from-indigo-800/30 dark:hover:to-indigo-100/20 px-2 pt-2 pb-5 scale-100 hover:scale-[1.01] rounded-md transition-all duration-200">
        {/* <div className="w-[14rem] h-fit flex flex-col px-2 pt-2 pb-5 bg-gradient-to-t from-indigo-100 to-indigo-100/0 dark:from-indigo-800/30 dark:to-indigo-950/0 hover:from-indigo-100 hover:to-indigo-950/80 dark:hover:from-indigo-800/30 dark:hover:to-indigo-50/50 rounded-md scale-100 hover:scale-[1.02] transition-all duration-200"> */}
        <Image
          className="aspect-[2/3] object-cover rounded mb-3 shadow shadow-black dark:shadow-white"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={500}
          height={600}
          priority
        />
        <div className="font-medium truncate">{title}</div>
        {/* <div className="text-sm font-light dark:text-white">{release_date}</div> */}
        <div className="text-xs text-muted-foreground font-light">
          {format(parseISO(release_date), "dd, MMM, yyyy")}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
