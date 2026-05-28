/**
 * Imagery for biodiversity.ae
 * Source: Unsplash
 */

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD";
const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: Abu Dhabi mangroves aerial — Higgsfield soul_location */
  hero: `${HF}/hf_20260528_230747_d308d52a-aa93-4658-bc29-57a41f02aea5.png`,

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
