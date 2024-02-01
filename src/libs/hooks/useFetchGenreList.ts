"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMoviesGenre } from "@/libs/apis/movies";

const useFetchGenreList = (genre_id: number) => {
  return useInfiniteQuery({
    queryKey: ["genrelist"],
    queryFn: async ({ pageParam }: { pageParam: number }) =>
      await getMoviesGenre({ genre_id, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.total_pages !== allPages.length - 1
          ? allPages.length + 1
          : undefined;

      return nextPage;
    },
  });
};

export default useFetchGenreList;
