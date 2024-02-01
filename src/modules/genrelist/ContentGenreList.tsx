"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import MovieCardPages from "@/components/MovieCardPages";
import { Button } from "@/components/ui/button";

import useFetchGenreList from "@/lib/hooks/useFetchGenreList";

interface Props {
  genre_id: number;
}

const ContentGenreList = ({ genre_id }: Props) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useFetchGenreList(genre_id);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="w-full flex flex-col items-center">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 justify-items-center">
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
    </div>
  );
};

export default ContentGenreList;
