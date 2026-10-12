import Image from "next/image";
import { ShieldCheckIcon } from "lucide-react";
import { getPrivacySummary } from "@/lib/copper/catalog";

export function PrivacySummary() {
  const privacy = getPrivacySummary();

  return (
    <section
      id="privacy"
      data-testid="privacy-summary"
      className="bg-patina/10 scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_16rem]">
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Privacy, plainly
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            How Copper handles your recordings
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            What Copper keeps, for how long, and how you stay in control, under
            our {privacy.policy} privacy policy.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {privacy.points.map((point) => (
              <li key={point} className="flex gap-3">
                <ShieldCheckIcon
                  aria-hidden
                  className="text-accent mt-0.5 size-5 shrink-0"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto aspect-square w-48 md:w-full">
          <Image
            src="/assets/brand/copper-mascot.png"
            alt="Copper, the robot mascot, waving and holding a checklist"
            fill
            sizes="(min-width: 768px) 256px, 192px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
