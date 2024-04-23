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
import { MovieDetail } from "@/common/types/movie";

interface CastProps {
  data: MovieDetail;
}

export default function Cast({ data }: CastProps) {
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
            <SectionHeading title="Cast" icon={<Laptop className="mr-1" />} />
            <SectionSubHeading>
              <div className="flex items-center">
                <CarouselPrevious className="relative top-0 w-6 h-6 -left-2 -translate-y-0" />
                <CarouselNext className="relative top-0 w-6 h-6 -right-0 -translate-y-0" />
              </div>
            </SectionSubHeading>
          </div>
          <CarouselContent className="py-4">
            <CarouselItem>Halo</CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
