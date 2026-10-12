import Image from "next/image";
import { LIFESTYLE } from "@/components/copper/landing/copy";
import { getProducts } from "@/lib/copper/catalog";
import { cn } from "@/lib/utils";

export function Showcase() {
  const photos = getProducts().flatMap((product) =>
    product.lifestyle.map((src) => ({
      src,
      product: product.name,
      ...(LIFESTYLE[src] ?? {
        alt: `${product.name} in an Arizona setting`,
        title: product.name,
        caption: product.type,
      }),
    })),
  );

  return (
    <section
      id="showcase"
      data-testid="showcase"
      className="bg-secondary scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 md:gap-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Built for the Sonoran sun
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Right at home in Arizona
          </h2>
        </div>

        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className="grid items-center gap-6 md:grid-cols-5 md:gap-12"
          >
            <div
              className={cn(
                "relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl md:col-span-3",
                i % 2 === 1 && "md:order-last",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1152px) 690px, (min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="md:col-span-2">
              <p className="text-primary text-sm font-semibold">
                {photo.product}
              </p>
              <h3 className="mt-1 text-2xl font-bold">{photo.title}</h3>
              <p className="text-muted-foreground mt-2 text-lg">
                {photo.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
