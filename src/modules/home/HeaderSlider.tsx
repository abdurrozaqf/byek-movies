"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import axiosWithConfig from "@/lib/apis/axiosWithConfig";
import { Response } from "@/lib/types/api";
import { Movie } from "@/lib/apis/movies";
import MovieCardHeader from "@/components/MovieCardHeader";

export const CarouselPlugin = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <section className="mb-10 w-full">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        orientation="vertical"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent className="h-[720px] relative">
          {data?.results
            .map((movie) => (
              <CarouselItem key={movie.id}>
                <MovieCardHeader data={movie} />
              </CarouselItem>
            ))
            .slice(0, 5)}
        </CarouselContent>
        <div className="absolute px-8 top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black/80 to-black/0 flex items-center justify-end text-slate-100">
          ─ {current}
        </div>
      </Carousel>
    </section>
  );
};
