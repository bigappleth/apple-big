"use client";
import { Disclosure } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => (
  <section id="faq" className="py-10 lg:py-20">
    <div className="flex flex-col lg:flex-row gap-10">
      {/* FAQ Title & Contact */}
      <div>
        <SectionTitle>
          <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
            คำถามที่พบบ่อย (FAQ)
          </h2>
        </SectionTitle>
        <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
          สอบถามเพิ่มเติม
        </p>
        <a
          href="mailto:help@intservices.com"
          className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
        >
          help@intservices.com
        </a>
      </div>

      {/* FAQ List */}
      <div className="w-full lg:max-w-2xl mx-auto border-b">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-7">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t focus:outline-none">
                    <span className="text-base font-semibold">{faq.question}</span>
                    {open ? (
                      <BiMinus className="w-5 h-5 text-secondary" />
                    ) : (
                      <BiPlus className="w-5 h-5 text-secondary" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-sm px-4 pt-4 pb-2 text-foreground-accent">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;