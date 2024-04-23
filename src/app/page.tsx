import { getMoviesbyList } from "@/services/apis/movies";
import Home from "@/modules/home";

export default async function HomePage() {
  const now_playing = await getMoviesbyList({ list: "now_playing" });
  const top_rated = await getMoviesbyList({ list: "top_rated" });
  const upcoming = await getMoviesbyList({ list: "upcoming" });
  const popular = await getMoviesbyList({ list: "popular" });

  return (
    <>
      <Home
        popular={popular}
        now_playing={now_playing}
        top_rated={top_rated}
        upcoming={upcoming}
      />
    </>
  );
}
