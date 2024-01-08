import { Request, Response } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { Movie, MovieDetail } from "./type";

export const getMoviesPagination = async (params?: Request) => {
  const response = await axiosWithConfig.get(
    `/movie/${params?.list}?page=${params?.page}`
  );
  return response.data as Response<Movie[]>;
};

export const getMoviesbyList = async (params?: Request) => {
  const response = await axiosWithConfig.get(`/movie/${params?.list}`);
  return response.data as Response<Movie[]>;
};

export const getMovies = async (params?: Request) => {
  const response = await axiosWithConfig.get(
    `/search/movie?query=${params?.name}`
  );
  return response.data as Response<Movie[]>;
};

export const getDetailMovie = async (movie_id: number) => {
  const response = await axiosWithConfig.get(
    `/movie/${movie_id}?append_to_response=videos`
  );
  return response.data as MovieDetail;
};

export const getSimilarMovies = async (movie_id: number) => {
  const response = await axiosWithConfig.get(`/movie/${movie_id}/similar`);
  return response.data as Response<Movie[]>;
};

export const getMoviesGenre = async (genre_id: number, params?: Request) => {
  const response = await axiosWithConfig.get(
    `/discover/movie?sort_by=popularity.desc&with_genres=${genre_id}&page=${params?.page}`
  );
  return response.data as Response<MovieDetail[]>;
};
