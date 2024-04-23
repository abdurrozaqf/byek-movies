"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import MovieCardPages from "@/components/elements/MovieCardPages";
import { Button } from "@/components/ui/button";

import useFetchSearchList from "@/hooks/useFetchSearchList";

interface Props {
  title: string;
}

const ContentSearchList = ({ title }: Props) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useFetchSearchList(title);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="flex flex-col items-center w-full">
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
    </div>
  );
};

export default ContentSearchList;
