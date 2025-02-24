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
		title: "Expert Window & Door Solutions in the Greater Toronto Area",
		description:
			"Transform your home with our professional window and door installation services. Family-owned, fully licensed, and serving the GTA for over 15 years.",
		cta: {
			label: "Get a Free Quote",
			href: redirects.core.contact,
		},
	},
	services: {
		title: "Our Services",
		description:
			"We specialize in professional window and door installations, along with custom door solutions that perfectly match your home's style and your specific needs.",
		services: [
			{
				title: "Window & Door Installation",
				description:
					"Professional installation of windows and doors with expert craftsmanship and attention to detail.",
				image: "/assets/hero-image.jpg",
				link: redirects.core.services.installation,
			},
			{
				title: "Custom Doors",
				description:
					"Beautifully crafted custom doors designed to your exact specifications and style preferences.",
				image: "/assets/hero-image.jpg",
				link: redirects.core.services.custom,
			},
		],
	},
	whoWeAre: {
		title: "M.I.K.E. Carpentry",
		description:
			"With over 15 years of experience, we're your trusted partner for all window and door needs. Our commitment to quality craftsmanship and customer satisfaction has made us a leading choice in the GTA.",
	},
	locations: {
		title: "Areas We Serve",
		description:
			"Proudly serving homeowners and businesses throughout the Greater Toronto Area, including Mississauga, Oakville, Burlington, and surrounding communities.",
	},
};

const footer = {
	description:
		"M.I.K.E. Carpentry is your trusted window and door specialist in the GTA. Licensed, insured, and committed to excellence in every project.",
};

type InfoPageConfig = {
	header: {
		title: string;
		subtitle: string;
	};
	main: {
		title: string;
		description: string;
	};
};

const about: InfoPageConfig = {
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

const services: {
	installation: InfoPageConfig;
	custom: InfoPageConfig;
} = {
	installation: {
		header: {
			title: "Professional Window & Door Installation",
			subtitle: "Expert Installation Services",
		},
		main: {
			title: "Quality You Can Trust",
			description: `
			Our professional window and door installation service ensures perfect fit, optimal energy efficiency, and lasting performance. We handle everything from initial measurement to final cleanup, ensuring a smooth and hassle-free experience.

			Every installation is performed by our experienced team using industry-leading techniques and premium materials. We work with all major brands and styles, providing expert guidance to help you choose the perfect solutions for your home.
			`,
		},
	},
	custom: {
		header: {
			title: "Custom Doors",
			subtitle: "Uniquely Crafted for Your Home",
		},
		main: {
			title: "Personalized Door Solutions",
			description: `
				Transform your home's entrance with our custom door solutions. We design and craft beautiful, durable doors that perfectly match your home's architecture and your personal style. From traditional to contemporary designs, we bring your vision to life.

				Our custom doors are built using premium materials and expert craftsmanship, ensuring exceptional quality, security, and longevity. Each door is carefully designed to meet your specific requirements for style, functionality, and energy efficiency.
			`,
		},
	},
};

const contact = {
	header: {
		title: "Let's Discuss Your Project",
		subtitle: "Free Consultations & Estimates",
	},
};

const locations: InfoPageConfig = {
	header: {
		title: "Where We Work",
		subtitle: "Serving the Greater Toronto Area",
	},
	main: {
		title: "Our Service Areas",
		description: `
			We proudly serve residential and commercial clients throughout the Greater Toronto Area, including:

			• Toronto and North York
			• Mississauga and Brampton
			• Oakville, Burlington, and Hamilton
			• Vaughan, Richmond Hill, and Markham
			• Scarborough and Pickering

			Whether you're in the heart of downtown Toronto or in the surrounding suburbs, our team is ready to provide expert window and door services. We understand the unique architectural styles and building requirements across different GTA neighborhoods, ensuring compliance with local regulations and delivering solutions that match your area's character.

			Not sure if you're within our service area? Contact us today - we're happy to discuss your project and provide more information about our coverage zones.
		`,
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
		services,
		locations,
	},
};
