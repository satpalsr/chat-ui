import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import dotenv from "dotenv";
import pkg from "./package.json" assert { type: "json" };

dotenv.config({ path: "./.env.local" });
dotenv.config({ path: "./.env" });

process.env.PUBLIC_VERSION = pkg.version.replace(/\.0\b/g, "");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		}),

		paths: {
			base: process.env.APP_BASE || "",
		},
	},
};

export default config;
