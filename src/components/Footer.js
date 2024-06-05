import Image from "next/image";
import Button from "./Button";

const mail = "hi@burninglamb.eu";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--bg-footer)] pb-20 pt-12 md:pb-8 md:pt-20"
    >
      <div className="mx-auto max-w-[var(--max-width)] px-4 md:px-[30px]">
        <h2
          className="mb-6 font-heading text-10xl lowercase leading-0.9 -tracking-4 md:mb-8 md:text-12xl"
          data-aos="fade-down"
        >
          Get in touch
        </h2>
        <div
          className="mb-8 size-8 md:mb-5 md:size-10"
          data-aos="fade-down-right"
        >
          <Image src="/svg/arrow-down-right.svg" alt="" fill />
        </div>
        <div className="mb-9 md:mb-11">
          <a
            className="text-5xl font-semibold leading-0.9 underline hover:text-primary-500 md:text-9xl"
            href={`mailto:${mail}`}
          >
            {mail}
          </a>
        </div>
        <div className="mb-[120px] flex gap-2 md:mb-16">
          <Button
            className="group flex items-center gap-2 px-[38px] md:px-12"
            href="/"
            isAlwaysSmall
          >
            <Image
              alt=""
              src="/svg/telegram-outlined.svg"
              width="13"
              height="13"
              className="group-hover:hidden"
            />
            <Image
              alt=""
              src="/svg/telegram-filled.svg"
              width="13"
              height="13"
              className="hidden group-hover:block"
            />{" "}
            <span className="mt-[3px] flex">Telegram</span>
          </Button>
          <Button
            className="group flex items-center gap-2 px-[38px] md:px-12"
            href="/"
            isAlwaysSmall
          >
            <Image
              alt=""
              src="/svg/instagram-outlined.svg"
              width="12"
              height="12"
              className="group-hover:hidden"
            />
            <Image
              alt=""
              src="/svg/instagram-filled.svg"
              width="12"
              height="12"
              className="hidden group-hover:block"
            />{" "}
            <span className="mt-[3px] flex">Instagram</span>
          </Button>
        </div>
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <p className="mb-2 leading-1.2 opacity-40 md:mb-0">
            Burning Lamb s. r. o.
            <br />
            Karpatské námestie 7770/10A
            <br />
            831 06 Bratislava
            <br />
            <br />
            BIZ ID: 56 035 136
          </p>
          <p className="text-sm uppercase leading-1.2 tracking-8 opacity-40">
            © {new Date().getFullYear()} Burning lamb — Digital Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
