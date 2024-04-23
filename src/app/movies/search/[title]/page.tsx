import { Metadata } from "next";

import ContentSearchList from "@/modules/searchlist/ContentSearchList";

type Props = {
  params: { title: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = params.title;

  return {
    title: page + " | Byek! Movies",
  };
}

export default async function SearchListPage({ params }: Props) {
  return (
    <section className="container pb-10">
      <p className="pl-4 text-center border-red-600 border-x-4">
        Result found: {decodeURIComponent(params.title)}
      </p>
      <ContentSearchList title={params.title} />
    </section>
  );
}
