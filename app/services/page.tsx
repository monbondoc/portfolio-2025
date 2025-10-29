"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Creating simple, effective websites with clean layouts & essential features that help businesses get online & connect with their audience.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing clear page layouts, thoughtful user flows, & accessible interfaces that prioritize ease of use & create positive first impressions.",
    href: "",
  },
  {
    num: "03",
    title: "Graphic Design",
    description: "Creating eye-catching social media graphics, brand materials, & visual content that elevate your digital presence & engage your audience.",
    href: "",
  },
  {
    num: "04",
    title: "Bookkeeping",
    description: "Recording & organizing your daily transactions, receipts, & expenses with accuracy to keep your financial records clear & up-to-date.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent translate-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
