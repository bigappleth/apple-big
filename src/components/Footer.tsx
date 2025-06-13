import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    const { siteName, siteNotice, siteInt } = siteDetails;
    const { subheading, quickLinks, email, telephone, socials } = footerDetails;

    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Site Info */}
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <h3 className=" text-md font-semibold cursor-pointer">
                            {siteName}
                        </h3>
                    </Link>
                    <p className="footer mt-4">{subheading}</p>
                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="">
                        {quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="footer">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h4 className="text-md font-semibold mb-4">ติดต่อเรา</h4>
                    {email && (
                        <Link
                            href={`mailto:${email}`}
                            className="footer "
                        >
                            อีเมล : {email}
                        </Link>
                    )}
                    {telephone && (
                        <Link
                            href={`tel:${telephone}`}
                            className="footer "
                        >
                            โทร : {telephone}
                        </Link>
                    )}
                    {socials && (
                        <div className="mt-4 flex items-center gap-4 flex-wrap">
                            {Object.entries(socials).map(([platformName, url]) =>
                                url ? (
                                    <Link
                                        href={url}
                                        key={platformName}
                                        aria-label={platformName}
                                    >
                                        {getPlatformIconByName(platformName)}
                                    </Link>
                                ) : null
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-sm font-normal text-foreground-accent px-6">
                <p>
                    Copyright &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
                </p>
                <p className="text-xs font-thin mt-3">{siteNotice}</p>
                <p className="text-xs font-thin">{siteInt}</p>
            </div>
        </footer>
    );
};

export default Footer;
