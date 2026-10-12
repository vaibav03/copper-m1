import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CUTOUT_ALT } from "@/components/copper/landing/copy";
import { getProducts } from "@/lib/copper/catalog";

export function Hero() {
  const [home, notes] = getProducts();

  return (
    <section
      id="top"
      data-testid="hero"
      className="bg-night text-sand relative overflow-hidden"
    >
      {/* Copper glow behind the products */}
      <div
        aria-hidden
        className="from-copper/30 absolute inset-y-0 right-0 w-full bg-radial-[at_75%_50%] to-transparent to-60% md:w-2/3"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <p className="text-copper mb-4 text-sm font-semibold tracking-widest uppercase">
            Made in Arizona
          </p>
          <h1 className="text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
            Desert-smart helpers for your home and work.
          </h1>
          <p className="text-sand/80 mt-5 text-lg sm:text-xl">
            From raw ideas to refined answers.
          </p>
          <Button asChild size="lg" className="mt-8 h-11 px-6 text-base">
            <a href="#products">See products</a>
          </Button>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-md md:max-w-none">
          <div className="absolute top-0 left-0 h-full w-[72%]">
            <Image
              src={home.cutout}
              alt={CUTOUT_ALT[home.id]}
              fill
              loading="eager"
              sizes="(min-width: 768px) 32vw, 70vw"
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-[62%] w-[48%]">
            <Image
              src={notes.cutout}
              alt={CUTOUT_ALT[notes.id]}
              fill
              loading="eager"
              sizes="(min-width: 768px) 22vw, 45vw"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
