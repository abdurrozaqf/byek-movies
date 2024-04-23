import { Laptop } from "lucide-react";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";
import MovieCard from "@/components/elements/MovieCard";

import { Response } from "@/common/types/api";
import { Movie } from "@/common/types/movie";

interface SimilarProps {
  data: Response<Movie[]>;
}

export default function Similar({ data }: SimilarProps) {
  return (
    <section className="space-y-6">
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-auto space-y-6 rounded-md"
        >
          <div className="space-y-2">
            <SectionHeading
              title="Similar"
              icon={<Laptop className="mr-1" />}
            />
            <SectionSubHeading>
              <p className="dark:text-neutral-400">Similar movies</p>
              <div className="flex items-center">
                <CarouselPrevious className="relative top-0 w-6 h-6 -left-2 -translate-y-0" />
                <CarouselNext className="relative top-0 w-6 h-6 -right-0 -translate-y-0" />
              </div>
            </SectionSubHeading>
          </div>
          <CarouselContent className="py-4">
            {data.results.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              >
                <MovieCard data={item} href={`/movies/detail/${item.id}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
