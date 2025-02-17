import { LandingHeroConfig } from "@/app/(landing)/components/landing-hero";
import { redirects } from "./redirects";

type FooterConfig = {
	description: string;
};

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

const footer: FooterConfig = {
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
};

export const copy = {
	landing,
	footer,
};
