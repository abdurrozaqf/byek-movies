import React, { useCallback, useMemo, useState } from "react";
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

import { getMovies } from "@/lib/apis/movies";

interface ComboboxDatas {
  movie_id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const SearchBox = () => {
  const [datas, setDatas] = useState<ComboboxDatas[]>([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const getSuggestions = useCallback(async function (query: string) {
    if (!query) {
      setDatas([]);
    }

    const response = await getMovies({
      name: query,
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
          className="w-[500px] justify-between shadow-md"
        >
          <p className="truncate">{value || "Search movie ..."}</p>
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0">
        <Command className="">
          <CommandInput
            className="placeholder:italic"
            placeholder="Search"
            onValueChange={onInputChange}
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {datas
              .map((data) => (
                <Link
                  key={data.movie_id}
                  href={`/movies/detail/${data.movie_id}`}
                >
                  <CommandItem
                    className="flex gap-4"
                    value={data.title}
                    onSelect={() => {
                      setValue("");
                      setDatas([]);
                      setOpen(false);
                    }}
                  >
                    <Image
                      className="aspect-[2/3] object-cover rounded mb-3 shadow shadow-black"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                      alt={data.title}
                      width={60}
                      height={100}
                      priority
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
        <div className="text-center py-1 border-t">
          {datas.length >= 5 && (
            <Link
              href={`/movies/search/${value}`}
              onClick={() => {
                setOpen(false);
                setValue("");
              }}
              className="italic text-sm"
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
