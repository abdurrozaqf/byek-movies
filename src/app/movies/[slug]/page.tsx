import { Metadata } from "next";

import { MOVIE_LIST } from "@/common/constant/movie-list";
import Container from "@/components/elements/Container";
import { List } from "@/modules/movies";

interface MovieListPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: MovieListPageProps): Promise<Metadata> {
  const Movie = MOVIE_LIST.find((item) => item.key === params.slug);

  return {
    title: `${Movie?.name}` + " | Byek! Movies",
  };
}

export default async function MovieListPage({ params }: MovieListPageProps) {
  return (
    <>
      <Container>
        <List list={params.slug} />
      </Container>
    </>
  );
}
