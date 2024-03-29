"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axiosWithConfig from "@/libs/apis/axiosWithConfig";
import { Response } from "@/libs/types/api";
import { Movie } from "@/libs/apis/movies";

const useFetchSearchList = (title: string) => {
  return useInfiniteQuery({
    queryKey: ["searchlist"],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const response = await axiosWithConfig.get(
        `/search/movie?query=${title}&page=${pageParam}`
      );
      return response.data as Response<Movie[]>;
    },
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

export default useFetchSearchList;
