import Image from "next/image";
import Link from "next/link";

import { Movie } from "@/services/apis/movies";

import { formatDate } from "@/utils/formatter";

interface Props {
  data: Movie;
  href: string;
}

const MovieCard = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path, release_date } = data;

  return (
    <Link href={href}>
      <div className="w-full h-full flex flex-col scale-100 hover:scale-[1.01] rounded-md transition-all duration-200">
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `/images/default-movie-poster.png`
          }
          priority
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="relative object-cover w-full h-auto rounded"
        />
        <div className="flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-black/70 to-black/0 h-[200px] w-full rounded p-4">
          <h1 className="font-medium text-white truncate">{title}</h1>
          <p className="text-xs font-light text-slate-300">
            {formatDate(release_date!)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
