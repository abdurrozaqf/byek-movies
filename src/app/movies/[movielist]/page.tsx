import { Metadata } from "next";

import ContentMovieList from "@/modules/movielist/ContentMovieList";

type Props = {
  params: { movielist: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movielist = params.movielist;

  return {
    title:
      `${
        movielist === "now_playing"
          ? "Now Playing"
          : movielist === "popular"
          ? "Popular"
          : movielist === "top_rated"
          ? "Top Rated"
          : movielist === "upcoming"
          ? "Upcoming"
          : ""
      }` + " | Byek! Movies",
  };
}

async function Page({ params }: Props) {
  return (
    <section className="pb-10 container">
      <p className="pl-4 border-x-4 border-red-600 text-center">{`${
        params.movielist === "now_playing"
          ? "Now Playing"
          : params.movielist === "popular"
          ? "Popular"
          : params.movielist === "top_rated"
          ? "Top Rated"
          : params.movielist === "upcoming"
          ? "Upcoming"
          : ""
      }`}</p>
      <ContentMovieList list={params.movielist} />
    </section>
  );
}

export default Page;
