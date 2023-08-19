import { Hero, Products, Guarantee } from "@/components/home";
import Cup from "@/components/home/cup";
import ImagesPrev from "@/components/home/images_prev";
import Sourced from "@/components/home/source";

export default function Home() {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <Hero />
      <Products />
      <Guarantee />
      <Sourced />
      <ImagesPrev />
      <Cup />
    </main>
  );
}
