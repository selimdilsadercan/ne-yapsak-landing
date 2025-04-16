import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering businesses with cutting-edge financial technology solutions.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
  ],
  email: "info@the-everything.com",
  socials: {
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/Twitter",
  },
};
