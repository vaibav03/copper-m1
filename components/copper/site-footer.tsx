import Image from "next/image";

// Always Night Sky, so it uses the Desert Sand wordmark in both themes.
export function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-night text-sand">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
        <Image
          src="/brand/logo-dark.png"
          alt="Copper State Labs"
          width={1200}
          height={197}
          className="h-auto w-40"
        />
        <p className="text-sand/70 text-sm">Fictional — for educational use.</p>
      </div>
    </footer>
  );
}
