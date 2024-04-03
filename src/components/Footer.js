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
        <h2 className="text-10xl md:text-12xl -tracking-4 leading-0.9 mb-6 font-heading lowercase md:mb-8">
          Get in touch
        </h2>
        <div className="mb-8 md:mb-5">
          <Image
            src="/svg/arrow-down-right.svg"
            width="32"
            height="32"
            className="md:hidden"
          />
          <Image
            src="/svg/arrow-down-right.svg"
            width="40"
            height="40"
            className="hidden md:block"
          />
        </div>
        <div className="mb-9 md:mb-11">
          <a
            className="leading-0.9 text-5xl font-semibold underline hover:text-primary-500 md:text-9xl"
            href={`mailto:${mail}`}
          >
            {mail}
          </a>
        </div>

        <div className="mb-[120px] flex gap-2 md:mb-16">
          <Button
            className="flex items-center gap-2 px-[38px] md:px-12"
            href="/"
            isAlwaysSmall
          >
            <Image src="/svg/telegram.svg" width="13" height="13" />{" "}
            <span className="mt-[3px] flex">Telegram</span>
          </Button>
          <Button
            className="flex items-center gap-2 px-[38px] md:px-12"
            href="/"
            isAlwaysSmall
          >
            <Image src="/svg/instagram.svg" width="12" height="12" />{" "}
            <span className="mt-[3px] flex">Instagram</span>
          </Button>
        </div>

        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <p className="leading-1.2 mb-2 opacity-40 md:mb-0">
            Burning Lamb s. r. o.
            <br />
            Karpatské námestie 7770/10A
            <br />
            831 06 Bratislava
            <br />
            <br />
            BIZ ID: 56 035 136
          </p>
          <p className="tracking-8 leading-1.2 text-sm uppercase opacity-40">
            © {new Date().getFullYear()} Burning lamb — Digital Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
