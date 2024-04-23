import { FileVideo } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionSubHeading from "@/components/elements/SectionSubHeading";
import SectionHeading from "@/components/elements/SectionHeading";
import { MovieDetail } from "@/services/apis/movies/type";

interface TrailerProps {
  data: MovieDetail;
}

export default function Trailer({ data }: TrailerProps) {
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
              title="Trailer"
              icon={<FileVideo className="mr-1" />}
            />
            <SectionSubHeading>
              <p className="dark:text-neutral-400">Trailers movies</p>
              <div className="flex items-center">
                <CarouselPrevious className="relative top-0 w-6 h-6 -left-2 -translate-y-0" />
                <CarouselNext className="relative top-0 w-6 h-6 -right-0 -translate-y-0" />
              </div>
            </SectionSubHeading>
          </div>
          <CarouselContent className="py-4">
            {data.videos?.results.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  allowFullScreen
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
