import { redirects } from "@/lib/config/redirects";
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

const BASE_URL = env.NEXT_PUBLIC_APP_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: `${BASE_URL}${redirects.core.landing}`,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}${redirects.core.about}`,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}${redirects.core.services}`,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}${redirects.core.contact}`,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}${redirects.legal.privacy}`,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}${redirects.legal.terms}`,
			lastModified: new Date(),
		},
	];
}
