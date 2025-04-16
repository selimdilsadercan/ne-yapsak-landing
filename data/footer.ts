import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  socials: ISocials;
} = {
  subheading: "“Ne yapsak?” demeye son, Wedo yanınızda.",
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
  email: "softwarepathandcv@gmail.com",
  socials: {
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/Twitter",
  },
};
