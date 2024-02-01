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

async function Page({ params }: Props) {
  return (
    <section className="pb-10 container">
      <p className="pl-4 border-x-4 border-red-600 text-center">
        Result found: {decodeURIComponent(params.title)}
      </p>
      <ContentSearchList title={params.title} />
    </section>
  );
}

export default Page;
