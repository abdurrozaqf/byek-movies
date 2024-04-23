import { Metadata } from "next";

import { GENRE_LIST } from "@/common/constant/genre-list";
import Container from "@/components/elements/Container";
import { Genre } from "@/modules/movies";

interface GenrePageProps {
  params: { id: number };
}

export async function generateMetadata({
  params,
}: GenrePageProps): Promise<Metadata> {
  const Genre = GENRE_LIST.find((genre) => genre.id === +params.id);

  return {
    title: Genre?.name + " | Byek! Movies",
  };
}

export default async function GenrePage({ params }: GenrePageProps) {
  return (
    <>
      <Container>
        <Genre genre_id={params.id} />
      </Container>
    </>
  );
}
