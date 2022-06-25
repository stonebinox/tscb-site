import { pixelToRem } from "./pixel-to-rem";

const BASE_SPACING_PIXELS = 16;

const DOUBLE_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS * 2);
const BASE_SPACING_AND_HALF = pixelToRem(BASE_SPACING_PIXELS * 1.5);
const BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS);
const HALF_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS / 2);
const QUARTER_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS / 4);
const PHONE_WIDTH = pixelToRem("480px");

const customSpacing = pixelToRem;

export const spacing = {
  BASE_SPACING,
  DOUBLE_BASE_SPACING,
  BASE_SPACING_AND_HALF,
  HALF_BASE_SPACING,
  QUARTER_BASE_SPACING,
  PHONE_WIDTH,
  customSpacing,
};
