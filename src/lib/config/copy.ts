import { LandingHeroConfig } from "@/app/(landing)/components/landing-hero";
import { redirects } from "./redirects";

const landing: {
	hero: LandingHeroConfig;
} = {
	hero: {
		title: "Welcome to our website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		cta: {
			label: "Get Started",
			href: redirects.home,
		},
	},
};

export const copy = {
	landing,
};
