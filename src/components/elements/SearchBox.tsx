import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import Image from "next/image";
import Link from "next/link";

import { Search, Star } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { getMovies } from "@/services/apis/movies";

interface ComboboxDatas {
  movie_id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const SearchBox = () => {
  const [datas, setDatas] = useState<ComboboxDatas[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const getSuggestions = useCallback(async function (query: string) {
    if (!query) {
      setDatas([]);
    }

    const response = await getMovies({
      title: query,
    });
    const newDatas =
      response.results.map((data) => {
        return {
          title: data.title,
          movie_id: data.id,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
        };
      }) ?? [];
    setDatas(newDatas);
    setValue(query);
  }, []);

  const getSuggestionsDebounce = React.useMemo(
    () => debounce(getSuggestions, 500),
    [getSuggestions]
  );

  function onInputChange(newValue: string) {
    getSuggestionsDebounce(newValue);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[350px] justify-between shadow-md bg-transparent border-slate-300 hover:bg-transparent text-slate-300 hover:text-slate-200"
        >
          <p className="truncate">{value || "Search movie ..."}</p>
          <Search className="w-4 h-4 ml-2 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-background/50 backdrop-blur">
        <Command className="bg-transparent">
          <CommandInput
            className="placeholder:italic"
            placeholder="Search"
            onValueChange={onInputChange}
          />
          <CommandEmpty>No movies found.</CommandEmpty>
          <CommandGroup>
            {datas
              .map((data) => (
                <Link
                  key={data.movie_id}
                  href={`/movies/detail/${data.movie_id}`}
                >
                  <CommandItem
                    className="flex gap-4 cursor-pointer"
                    value={data.title}
                    onSelect={() => {
                      setValue("");
                      setDatas([]);
                      setOpen(false);
                    }}
                  >
                    <Image
                      src={
                        data.poster_path
                          ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                          : `/images/default-movie-poster.png`
                      }
                      priority
                      width={60}
                      height={100}
                      alt={data.title}
                      className="aspect-[2/3] object-cover rounded mb-3 shadow shadow-black"
                    />
                    <h1 className="">
                      <span>{data.title}</span>
                      <span className="flex items-center gap-2">
                        <Star size={16} />{" "}
                        {data.vote_average.toLocaleString().slice(0, 4)}
                      </span>
                    </h1>
                  </CommandItem>
                </Link>
              ))
              .slice(0, 5)}
          </CommandGroup>
        </Command>
        <div
          className={`${
            datas.length ? "block" : "hidden"
          } text-center py-1 border-t`}
        >
          {datas.length >= 5 && (
            <Link
              href={`/movies/search/${value}`}
              onClick={() => {
                setOpen(false);
                setValue("");
              }}
              className="text-sm italic"
            >
              view all results
            </Link>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchBox;
