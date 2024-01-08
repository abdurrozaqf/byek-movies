import { Movie } from "../apis/movies/type";

export interface Request {
  name?: string;
  list?: string;
  page?: string | number;
}

export interface Response<T = any> {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

export interface Meta {
  page: number;
  total_pages: number;
  total_results: number;
}
