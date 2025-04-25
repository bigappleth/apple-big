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
        facebook: 'https://facebook.com',
        line: 'https://www.instagram.com',
        youtube: 'https://youtube.com',
        x: 'https://twitter.com/x',
        github: 'https://github.com',
        linkedin: 'https://www.linkedin.com',
    }
}