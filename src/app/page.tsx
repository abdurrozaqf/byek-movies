import ContentListMovie from "@/modules/home/ContentListMovie";
import { CarouselHeader } from "@/modules/home/HeaderSlider";

async function Home() {
  return (
    <section className="flex flex-col w-full">
      <CarouselHeader />
      <ContentListMovie />
    </section>
  );
}

export default Home;
