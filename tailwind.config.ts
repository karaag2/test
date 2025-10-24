// @ts-expect-error This file does not have type definitions.
import nativewindPreset from "nativewind/dist/tailwind/index.js";
import type { Config } from "tailwindcss";
import colors from "./src/ui/colors.ts";

const variables: { [key: string]: string } = {};
const colorMap: { [key: string]: string } = {};

for (const [name, color] of Object.entries(colors)) {
	variables[`--${name}`] = color;
	colorMap[name] = `var(--${name})`;
}

export default {
	content: ["./src/**/*.js,ts,tsx}"],
	plugins: [
		({ addBase }) =>
			addBase({
				":root": variables,
			}),
	],
	presets: [nativewindPreset],
	theme: {
		extend: {
			colors: colorMap, // <- on étend les couleurs au lieu de les remplacer
		},
	},
} satisfies Config;
