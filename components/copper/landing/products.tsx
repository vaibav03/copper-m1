import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CUTOUT_ALT } from "@/components/copper/landing/copy";
import { formatUsd, getProducts } from "@/lib/copper/catalog";

// Catalog color names → brand swatches ("Polished Copper" and "Brushed Copper"
// are both Copper).
function swatchClass(color: string) {
  if (/copper/i.test(color)) return "bg-copper";
  if (/teal/i.test(color)) return "bg-patina";
  if (/sand/i.test(color)) return "bg-sand";
  if (/night/i.test(color)) return "bg-night";
  return "bg-muted";
}

export function Products() {
  const products = getProducts();

  return (
    <section
      id="products"
      data-testid="products"
      className="scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            The lineup
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Two devices, one Copper
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            One runs the house. One takes the notes. Both answer to “Hey
            Copper.”
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.id}
              data-testid="product-card"
              data-product={product.id}
              className="gap-0 py-0"
            >
              <div className="bg-secondary flex flex-col items-center px-6 pt-8 pb-6">
                <div className="relative aspect-square w-full max-w-64">
                  <Image
                    src={product.cutout}
                    alt={CUTOUT_ALT[product.id]}
                    fill
                    sizes="(min-width: 768px) 256px, 70vw"
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <ul
                  className="mt-6 flex items-center gap-2"
                  aria-label={`${product.name} colors`}
                >
                  {product.colors.map((color) => (
                    <li key={color} title={color}>
                      <span
                        className={`ring-foreground/20 block size-5 rounded-full ring-1 ring-offset-2 ring-offset-transparent ${swatchClass(color)}`}
                      />
                      <span className="sr-only">{color}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-2 text-xs">
                  {product.colors.join(" · ")}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary" className="capitalize">
                      {product.type}
                    </Badge>
                    <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>
                  </div>
                  <p className="text-primary text-3xl font-extrabold">
                    {formatUsd(product.priceUsd)}
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {product.features.map((feature) => (
                    <li key={feature.name} className="flex gap-3">
                      <CheckIcon
                        aria-hidden
                        className="text-accent mt-0.5 size-5 shrink-0"
                      />
                      <div>
                        <p className="font-semibold">{feature.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
