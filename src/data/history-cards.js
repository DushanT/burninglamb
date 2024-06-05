import Image from "next/image";

export default [
  {
    number: "7",
    icon: (
      <>
        <Image
          alt=""
          src="/svg/asterisk.svg"
          width="40"
          height="40"
          className="hidden md:block"
        />
        <Image
          alt=""
          src="/svg/asterisk.svg"
          width="32"
          height="32"
          className="md:hidden"
        />
      </>
    ),
    title: "Years of experience",
    description:
      "With years in the market, we continually innovate and explore new possibilities.",
  },
  {
    number: "54",
    icon: (
      <>
        <Image
          alt=""
          src="/svg/asterisk-quarter.svg"
          width="37"
          height="38"
          className="hidden md:block"
        />
        <Image
          alt=""
          src="/svg/asterisk-quarter.svg"
          width="30"
          height="30"
          className="md:hidden"
        />
      </>
    ),
    title: "Brands we helped",
    description:
      "Helped renowned brands grow, elevating their market presence and impact.",
  },
  {
    number: "106+",
    icon: (
      <>
        <Image
          alt=""
          src="/svg/asterisk-half.svg"
          width="42"
          height="29"
          className="hidden md:block"
        />
        <Image
          alt=""
          src="/svg/asterisk-half.svg"
          width="32"
          height="23"
          className="md:hidden"
        />
      </>
    ),
    title: "Products we created",
    description: "Expertise and dedication in delivering exceptional services.",
  },
];
