import { LandingHeroConfig } from "@/app/(core)/(landing)/components/landing-hero";
import { redirects } from "./redirects";

const landing: {
	hero: LandingHeroConfig;
} = {
	hero: {
		title: "Welcome to our website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		cta: {
			label: "Get a Free Quote",
			href: redirects.core.contact,
		},
	},
};

const footer = {
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
};

export const copy = {
	landing,
	footer,
};
