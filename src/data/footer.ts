import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "iPhone",
            url: "#iPhone"
        },
        {
            text: "iPad",
            url: "#iPad"
        },
        {
            text: "Macbook",
            url: "#Macbook"
        },
        {
            text: "iMac",
            url: "#iMac"
        }
    ],
    email: 'admin@intservices.com',
    telephone: '063-117-0885',
    socials: {
        github: 'https://github.com',
        x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}