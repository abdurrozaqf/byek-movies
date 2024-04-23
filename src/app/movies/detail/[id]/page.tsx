import { Metadata } from "next";

import { getDetailMovie, getSimilarMovies } from "@/services/apis/movies";
import Container from "@/components/elements/Container";
import { Detail } from "@/modules/movies";

interface DetailMoviePageProps {
  params: { id: number };
}

export async function generateMetadata({
  params,
}: DetailMoviePageProps): Promise<Metadata> {
  const movie = await getDetailMovie(params.id);
  return {
    title: movie.title + " | Byek! Movies",
  };
}

export default async function DetailMoviePage({
  params,
}: DetailMoviePageProps) {
  const similarMovies = await getSimilarMovies(params.id);
  const movie = await getDetailMovie(params.id);

  return (
    <>
      <Container>
        <Detail movie={movie} similarMovies={similarMovies} />
      </Container>
    </>
  );
}
