import { redirects } from "@/lib/config/redirects";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

const BASE_URL = env.NEXT_PUBLIC_APP_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const core = Object.values(redirects.core).map((route) => ({
		url: `${BASE_URL}${route}`,
		lastModified: new Date(),
	}));

	const legal = Object.values(redirects.legal).map((route) => ({
		url: `${BASE_URL}${route}`,
		lastModified: new Date(),
	}));

	return [...core, ...legal];
}
