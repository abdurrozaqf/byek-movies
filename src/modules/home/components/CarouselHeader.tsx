"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";

import MovieCardHeader from "@/components/elements/MovieCardHeader";

import axiosWithConfig from "@/services/apis/axiosWithConfig";
import { Response } from "@/common/types/api";
import { Movie } from "@/common/types/movie";

export default function CarouselHeader() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const { data } = useQuery({
    queryKey: ["headerlist"],
    queryFn: async () => {
      const response = await axiosWithConfig.get(`/movie/popular`);
      return response.data as Response<Movie[]>;
    },
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <Carousel
      setApi={setApi}
      orientation="vertical"
      opts={{
        align: "start",
        loop: true,
      }}
      className="h-[720px] mb-10 -mt-[73px]"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent className="h-[720px] relative">
        {data?.results.slice(0, 5).map((movie) => (
          <CarouselItem key={movie.id} className="-ml-[1px]">
            <MovieCardHeader data={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute px-8 top-0 right-0 w-1/6 h-[720px] bg-gradient-to-l from-black/80 to-black/0 flex items-center justify-end text-slate-100 opacity-0 md:opacity-100">
        <ul className="flex flex-col gap-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex w-[32px]">
              <p
                className={`${
                  current === index + 1
                    ? `opacity-100 -translate-x-0`
                    : `opacity-0 -translate-x-5`
                } transition-all duration-700`}
              >
                ─
              </p>
              <p
                className={`w-full text-end ${
                  current === index + 1 ? "scale-125" : "scale-75"
                } transition-all duration-300`}
              >
                {index + 1}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Carousel>
  );
}
