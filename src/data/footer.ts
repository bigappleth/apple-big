import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "เราคือผู้เชี่ยวชาญในการรับซื้อสินค้า IT Apple ทุกรุ่นทั้งมือหนึ่งและมือสอง บริการผ่านออนไลน์และหน้าร้านประเมินราคาฟรี จ่ายเงินทันที ให้ราคาสูงกว่าท้องตลาด ไม่โดนกดราคา รับซื้อเครื่องใหม่ยังไม่แกะ เครื่องยังไม่ได้ใช้งาน และเครื่องบริษัทจำนวนมาก บริการสะดวกรวดเร็ว สามารถทำการขายได้ทันที!!",
    quickLinks: [
        {
            text: "ขาย iPhone",
            url: "iphone"
        },
        {
            text: "ขาย iPad",
            url: "ipad"
        },
        {
            text: "ขาย Macbook",
            url: "macbook"
        },
        {
            text: "ขาย iMac",
            url: "imac"
        },
        {
            text: "Contact Us",
            url: "contact"
        }
    ],
    email: 'buy@bigapplestorethailand.com',
    telephone: '080-583-9761',
    socials: {
        facebook: 'https://www.facebook.com/bigapplestore824',
        line: 'https://line.me/ti/p/~@bigapplestore',
        youtube: 'https://youtube.com/@int-100',
    }
}