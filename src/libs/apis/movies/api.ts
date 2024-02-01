import axiosWithConfig from "@/libs/apis/axiosWithConfig";
import { Request, Response } from "@/libs/types/api";
import { Movie, MovieDetail } from "./type";

export const getMoviesList = async (params?: Request) => {
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
    `/search/movie?query=${params?.title}`
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

export const getMoviesGenre = async (params?: Request) => {
  const response = await axiosWithConfig.get(
    `/discover/movie?sort_by=popularity.desc&with_genres=${params?.genre_id}&page=${params?.page}`
  );
  return response.data as Response<MovieDetail[]>;
};
