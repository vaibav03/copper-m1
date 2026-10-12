import type { ProductId } from "@/lib/copper/catalog";

// Alt text and captions for the photography. Prices and plan details never go
// here: they come from lib/copper/catalog.ts.

export const CUTOUT_ALT: Record<ProductId, string> = {
  "copper-home":
    "Copper Home smart speaker with copper fabric and a round display showing the time and temperature",
  "copper-notes":
    "Copper Notes square clip-on recorder in brushed copper with a glowing amber ring",
};

export const LIFESTYLE: Record<
  string,
  { alt: string; title: string; caption: string }
> = {
  "/assets/lifestyle/copper-home-desert-light.png": {
    alt: "Copper Home on a stone kitchen counter, with saguaros and mountains at sunset through the window",
    title: "At home in the desert light",
    caption:
      "Copper Home keeps the house running, from the sprinklers to the monsoon alerts.",
  },
  "/assets/lifestyle/copper-notes-stone-desk.png": {
    alt: "Copper Notes and its charging puck on a stone desk in warm afternoon light",
    title: "Small enough to forget it's there",
    caption:
      "Copper Notes charges on its puck and is ready for the next meeting.",
  },
  "/assets/lifestyle/copper-notes-golden-hour.png": {
    alt: "Person writing in a notebook with Copper Notes clipped to their shirt pocket at golden hour",
    title: "Clip it on, then just talk",
    caption:
      "Copper Notes chimes when it starts recording, then turns the conversation into notes.",
  },
};
