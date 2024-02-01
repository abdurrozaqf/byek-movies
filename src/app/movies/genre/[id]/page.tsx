import { Metadata } from "next";

import ContentGenreList from "@/modules/genrelist/ContentGenreList";
import { GenreList } from "@/common/constant/genre-list";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const Genre = GenreList.genres.find((genre) => genre.id === +params.id);

  return {
    title: Genre?.name + " | Byek! Movies",
  };
}

async function Page({ params }: Props) {
  return (
    <section className="pb-10 container">
      <ContentGenreList genre_id={params.id} />
    </section>
  );
}

export default Page;
