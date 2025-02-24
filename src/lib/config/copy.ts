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

const about = {
	header: {
		title: "About",
		subtitle: "M.I.K.E. Carpentry",
	},
	main: {
		title: "Our Mission",
		description: `
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
		`,
	},
};

export const copy = {
	footer,
	pages: {
		landing,
		about,
	},
};
