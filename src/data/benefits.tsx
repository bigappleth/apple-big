import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";
import { FaBahtSign, FaBuilding, FaTabletScreenButton, FaDatabase, FaApple } from "react-icons/fa6";
import { SiThunderstore } from "react-icons/si";
import { RiVerifiedBadgeFill, RiWaterFlashFill, RiMicroscopeFill } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import { BsBatteryCharging } from "react-icons/bs";




import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "WHY CHOOSE US",
        description: "Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.",
        bullets: [
            {
                title: "Apple Specialized",
                description: "By specializing in Apple products, we insure that the correct repair and maintenance will be performed on your device.",
                icon: <FaApple size={36} />
            },
            {
                title: "Affordable Price",
                description: "We service broken & out-of-warranty devices at a fraction of what the Apple Store charges.",
                icon: <FaBahtSign size={26} />
            },
            {
                title: "Locally Owned",
                description: "We take pride in being a Mom-&-Pop shop so that we can provide each client with a personal experience.",
                icon: <FaBuilding size={26} />
            },
            {
                title: "Quick & Efficient",
                description: "We stock our inventory with common Apple iPhone and Macintosh parts, allowing us to repair most devices same day.",
                icon: <SiThunderstore size={26} />
            },
            {
                title: "Warrantied",
                description: "Almost all of our repairs come with a warranty, up to 1 year, giving clients a peace of mind.",
                icon: <RiVerifiedBadgeFill size={26} />
            },
            {
                title: "Precision Quality",
                description: "We strive to make sure every repair is completed with precision and perfection.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "MAIN SERVICES",
        description: "We offer a variety of services from operating system repairs, to liquid damage cleaning, and physical damage restoration.",
        bullets: [
            {
                title: "IPHONE SCREEN REPAIR",
                description: "Our screen repairs take only 45 minutes and come with a 1 year warranty.",
                icon: <FaTabletScreenButton size={26} />
            },
            {
                title: "MAC REPAIR",
                description: "From virus removal to logic board repair, we specialize in making your Mac like new again.",
                icon: <MdLaptopMac size={26} />
            },
            {
                title: "BATTERY REPLACEMENT",
                description: "Let us replace your battery so you don’t have to replace your device.",
                icon: <BsBatteryCharging size={26} />
            },
            {
                title: "DATA RECOVERY",
                description: "If your computer or phone stopped powering on, we can attempt to recover your data.",
                icon: <FaDatabase size={26} />
            },
            {
                title: "LIQUID DAMAGE",
                description: "We offer professional ultrasonic cleaning to restore your device after it’s been wet.",
                icon: <RiWaterFlashFill size={26} />
            },
            {
                title: "MICROSOLDER SERVICES",
                description: "We have the ability to repair logic boards and other circuits with our micro soldering station.",
                icon: <RiMicroscopeFill size={26} />
            },
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]