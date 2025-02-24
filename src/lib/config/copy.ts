import { LandingHeroConfig } from "@/app/(core)/(landing)/components/landing-hero";
import { redirects } from "./redirects";
import { ServiceCardProps } from "@/app/(core)/(landing)/components/services";
import { TextBlockConfig } from "@/components/text-block";

type TextBlock = Omit<TextBlockConfig, "tagline">;
const landing: {
	hero: LandingHeroConfig;
	services: {
		services: ServiceCardProps[];
	} & TextBlock;
	whoWeAre: TextBlock;
	locations: TextBlock;
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
	services: {
		title: "Our Services",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		services: [
			{
				title: "Window & Door Installation",
				description: "Complete",
				image: "/assets/hero-image.jpg",
				link: redirects.core.services.installation,
			},
			{
				title: "Custom Doors",
				description: "Product 3 description",
				image: "/assets/hero-image.jpg",
				link: redirects.core.services.custom,
			},
		],
	},
	whoWeAre: {
		title: "M.I.K.E. Carpentry",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
	},
	locations: {
		title: "Who We Help",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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

const contact = {
	header: {
		title: "We'd Love to Talk",
		subtitle: "Get in touch",
	},
};

export const copy = {
	layout: {
		footer,
	},
	pages: {
		landing,
		about,
		contact,
	},
};
