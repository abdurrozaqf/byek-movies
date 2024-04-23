import Image from "next/image";
import Link from "next/link";

import { Movie } from "@/services/apis/movies";

import { formatDate } from "@/utils/formatter";

interface Props {
  data: Movie;
  href: string;
}

const MovieCardPages = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path, release_date } = data;

  return (
    <Link href={href}>
      <div className="w-full h-auto scale-100 hover:scale-[1.01] rounded-md transition-all duration-200">
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `/images/default-movie-poster.png`
          }
          priority
          alt={title}
          width="0"
          height="100"
          sizes="100vw"
          className="relative w-full h-full rounded"
        />
        <div className="absolute bottom-0 flex flex-col justify-end w-full h-full p-4 rounded bg-gradient-to-t from-black/80 to-black/0">
          <h1 className="font-medium text-white truncate">{title}</h1>
          <p className="text-xs font-light text-slate-300">
            {formatDate(release_date!)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCardPages;
