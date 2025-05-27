import { FaDatabase } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdLaptopMac } from "react-icons/md";
import { BsBatteryCharging } from "react-icons/bs";




import { IBenefit } from "@/types"
import Image from "next/image";

export const benefits: IBenefit[] = [
    {
        title: "ขายกับเราดียังไง?",
        description: "Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.",
        bullets: [
            {
                title: "ฟรี! ประเมินราคาก่อนขายจริง",
                description: "ลูกค้าสามารถประเมินราคาก่อนทำการขายจริง เพียงส่งข้อมูลเข้ามาประเมินราคากับทางร้าน เราตรวจเช็คสภาพฟรีหรือส่ง EMS มาที่ร้านได้",
                icon: <Image src="/images/icons/service.svg" alt="ฟรี! ประเมินราคาก่อนขายจริง" width={50} height={50} />, 
            },
            {
                title: "มั่นใจในบริการของเรา",
                description: "สามารถต่อรองพูดคุยราคาก่อนขายได้ ให้ลูกค้าได้ตัดสินใจและกำหนดวัน เวลา สถานที่ให้เรามีบริการรับซื้อถึงที่ทั้งในกรุงเทพฯและปริมณฑล",
                icon: <Image src="/images/icons/qc.svg" alt="ฟรี! ประเมินราคาก่อนขายจริง" width={50} height={50} />
            },
            {
                title: "จบราคาไว รับเงินทันที",
                description: "เมื่อทำการตกลงราคากันแล้วทางร้านจะทำการจ่ายเงินให้ทันที จ่ายได้ทั้งเงินสดและโอนเงิน",
                icon: <Image src="/images/icons/massenger.svg" alt="ฟรี! ประเมินราคาก่อนขายจริง" width={50} height={50} />
            },
            {
                title: "ปลอดภัย ไม่เหลือข้อมูลเก่า",
                description: "ข้อมูลของลูกค้าจะไม่รั่วไหล ทางร้านจะทำการล้างข้อมูลทันที เมื่อตกลงขายสินค้ากับเรา",
                icon:<Image src="/images/icons/safe.svg" alt="ฟรี! ประเมินราคาก่อนขายจริง" width={50} height={50} />
            }
        ],
        imageSrc: "/images/banners/banners-3.png"
    },
    {
        title: "บริการของเรามีอะไรบ้าง ?",
        description: "",
        bullets: [
            {
                title: "รับซื้อ",
                description: "เปลี่ยนเครื่องเก่าเป็นเงินสดทันที! เรายินดีรับซื้อ iPhone และ iPad มือสองทุกรุ่น ทุกสภาพ ให้ราคาที่สมเหตุสมผลและยุติธรรม ประเมินราคาฟรีถึงที่ หรือนัดรับได้ตามสะดวก หมดกังวลเรื่องการขายเอง ไม่ต้องรอนาน ได้เงินไวแน่นอน",
                icon: <IoMdCheckmarkCircleOutline size={40} className=" fill-primary" />
            },
            {
                title: "รับฝาก",
                description: "ต้องการเงินด่วนแต่ยังไม่อยากขาย? บริการรับฝาก iPhone และ iPad ช่วยให้คุณได้รับเงินสดไปใช้จ่ายได้อย่างรวดเร็ว โดยที่คุณยังคงเป็นเจ้าของเครื่องอยู่ หมดห่วงเรื่องเอกสารยุ่งยาก อนุมัติไว ได้เงินทันใจ เครื่องของคุณจะถูกเก็บรักษาอย่างปลอดภัยในสถานที่ที่ได้มาตรฐาน",
                icon: <IoMdCheckmarkCircleOutline size={40} className=" fill-primary" />
            },
            {
                title: "รับผ่อน",
                description: "เป็นเจ้าของ iPhone / iPad ในฝันได้ง่ายๆ! ไม่ต้องรอเงินก้อน เรามีบริการรับผ่อน iPhone และ iPad มือสอง ด้วยเงื่อนไขที่ยืดหยุ่นและอนุมัติไว ให้คุณสามารถผ่อนชำระได้ตามกำลังและความสะดวก เพื่อให้คุณได้ใช้งานอุปกรณ์ที่ต้องการโดยไม่ต้องกังวลเรื่องงบประมาณ",
                icon: <IoMdCheckmarkCircleOutline size={40} className=" fill-primary" />
            },
            {
                title: "รับเทิร์น",
                description: "อัปเกรดเครื่องใหม่ได้คุ้มค่ากว่าเดิม! นำ iPhone หรือ iPad เครื่องเก่าของคุณมาแลกเป็นส่วนลดสำหรับซื้อเครื่องใหม่จากเราได้เลย ไม่ต้องเสียเวลาประกาศขายเองให้ยุ่งยาก เราตีราคาเครื่องเก่าของคุณอย่างยุติธรรม เพื่อให้คุณได้เป็นเจ้าของ iPhone หรือ iPad รุ่นใหม่ได้ในราคาที่คุ้มค่าที่สุด",
                icon: <IoMdCheckmarkCircleOutline size={40} className=" fill-primary" />
            },
        ],
        imageSrc: "/images/banners/banners-2.png"
    },

]