import ContentListMovie from "@/modules/home/ContentListMovie";
import { CarouselPlugin } from "@/modules/home/HeaderSlider";

async function Home() {
  return (
    <section className="flex flex-col w-full">
      <div className="-mt-20 w-full">
        <CarouselPlugin />
      </div>
      <ContentListMovie />
    </section>
  );
}

export default Home;
