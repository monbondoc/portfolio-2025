"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: `Year${1 === 1 ? "" : "s"} of experience`,
  },
  {
    num: 4,
    text: "Projects Completed",
  },
  {
    num: 3,
    text: "Technologies Experienced",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none justify-center xl:justify-start">
          {stats.map((item, index) => {
            return (
              <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start min-w-[140px] sm:min-w-40" key={index}>
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold sm:text-5xl " />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                } leading-snug text-white/80 text-sm sm:text-base`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
