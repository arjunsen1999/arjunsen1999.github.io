import React from "react";
import HeadingComponent from "../HeadingComponent";
import { contact_info, contact_section_heading } from "@/data/contact.data";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div>
      <div className="px-8 mb-14">
        <HeadingComponent heading={contact_section_heading} />
      </div>
      <div className="w-full min-h-[40vh] flex flex-col min-[927px]:flex-row  items-start  min-[927px]:justify-center ">
        <div className="p-4 w-full min-[927px]:w-[50%]  mx-auto relative z-10  pt-20 md:pt-0 flex flex-col gap-4 ">
          {/* ///////////////////////////////////////////////////////////////////////////////////// */}

          <div className="px-5">
            <div className="w-full">
              <p className="text-secondary dancing-script text-lg">{`<ul>`}</p>
            </div>

            <div className="flex flex-col gap-4">
              {contact_info?.map((ele, idx) => {
                if (ele.link) {
                  return (
                    <div className="px-5" key={idx}>
                      <div className="w-full ">
                        <p className="text-secondary dancing-script text-lg">{`<li>`}</p>
                      </div>
                      <a href={ele.link}>
                        <div className="flex items-center justify-start gap-4 ml-4">
                          <div className="w-[40px] h-[40px] border border-primary rounded-xl flex items-center justify-center">
                            <Image
                              src={`/icons/${ele.svg}.svg`}
                              width={20}
                              height={20}
                              alt={ele.svg}
                            />
                          </div>
                          <div className="text-white text-sm sm:text-lg font-bold">
                            {ele.title}
                          </div>
                        </div>
                      </a>
                      <div className="w-full ">
                        <p className="text-secondary dancing-script text-lg">{`</li>`}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="px-5" key={idx}>
                      <div className="w-full ">
                        <p className="text-secondary dancing-script text-lg">{`<li>`}</p>
                      </div>
                        <div className="flex items-center justify-start gap-4 ml-4">
                          <div className="w-[40px] h-[40px] border border-primary rounded-xl flex items-center justify-center">
                            <Image
                              src={`/icons/${ele.svg}.svg`}
                              width={20}
                              height={20}
                              alt={ele.svg}
                            />
                          </div>
                          <div className="text-white text-sm sm:text-lg font-bold">
                            {ele.title}
                          </div>
                        </div>
                      <div className="w-full ">
                        <p className="text-secondary dancing-script text-lg">{`</li>`}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="w-full ">
              <p className="text-secondary dancing-script text-lg">{`</ul>`}</p>
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        </div>
        <div className="p-4 w-full min-[927px]:w-[50%]  mx-auto relative z-10  pt-20 md:pt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
