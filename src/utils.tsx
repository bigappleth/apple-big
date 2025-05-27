import { FaFacebook, FaYoutube, FaLine } from "react-icons/fa6";

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
    switch (platformName) {
        case 'facebook': {
            return <FaFacebook size={24} className='min-w-fit' />;
        }

        case 'youtube': {
            return <FaYoutube size={24} className='min-w-fit' />;
        }

        case 'line': {
            return <FaLine size={22} className='min-w-fit' />;
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }
}