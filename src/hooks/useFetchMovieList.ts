"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getMoviesList } from "@/services/apis/movies";

const useFetchMovieList = (list: string) => {
  return useInfiniteQuery({
    queryKey: ["movielist"],
    queryFn: async ({ pageParam }: { pageParam: number }) =>
      await getMoviesList({ list, page: pageParam }),
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

export default useFetchMovieList;
