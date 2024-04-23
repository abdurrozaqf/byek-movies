"use client";

import { useInView } from "react-intersection-observer";
import { Laptop } from "lucide-react";
import { useEffect } from "react";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";
import MovieCardPages from "@/components/elements/MovieCardPages";
import { Button } from "@/components/ui/button";

import useFetchGenreList from "@/hooks/useFetchGenreList";
import { GENRE_LIST } from "@/common/constant/genre-list";

interface GenreListProps {
  genre_id: number;
}

export default function GenreList({ genre_id }: GenreListProps) {
  const Genre = GENRE_LIST.find((genre) => genre.id === +genre_id);
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useFetchGenreList(genre_id);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section className="w-full space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={`${Genre?.name}`}
          icon={<Laptop className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">List movies by genre</p>
        </SectionSubHeading>
      </div>
      <ul className="grid grid-cols-2 gap-6 pt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {data?.pages.map((datas) =>
          datas.results.map((movie) => (
            <MovieCardPages
              key={movie.id}
              data={movie}
              href={`/movies/detail/${movie.id}`}
            />
          ))
        )}
      </ul>
      <Button
        ref={ref}
        variant="outline"
        className="w-fit"
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading More ...."
          : hasNextPage
          ? "Load More"
          : "No more to load"}
      </Button>
    </section>
  );
}
