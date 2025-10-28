"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 4,
    text: "Projects Completed",
  },
  {
    num: 4,
    text: "Technologies Experienced",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>{stats.map}</div>
      </div>
    </section>
  );
};

export default Stats;
