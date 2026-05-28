/**
 * Imagery for biodiversity.ae
 * Source: Unsplash
 */

const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: UAE desert/nature */
  hero: `${UNS}/photo-1512236393954-2b2f4dae1f0e?auto=format&fit=crop&w=2400&q=85`,

  /** Mangroves */
  mangroves: `${UNS}/photo-1559827291-72f590e49386?auto=format&fit=crop&w=2400&q=85`,

  /** Trees / desert afforestation */
  afforestation: `${UNS}/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2400&q=85`,

  /** Nature reserve */
  nature: `${UNS}/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=85`,

  /** Agriculture / AgriCarbon */
  agri: `${UNS}/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const PROJECT_IMAGES = [
  IMAGES.mangroves,
  IMAGES.afforestation,
  IMAGES.nature,
  IMAGES.agri,
];
