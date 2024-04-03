import Image from "next/image";
import Button from "./Button";

export default function Slide({
  title,
  description,
  tags,
  image,
  index,
  ...other
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-xl bg-[var(--bg-secondary)]"
      {...other}
    >
      <div className="md:hidden">
        <Image
          src={`/images/projects/mobile/${image}.png`}
          width="343"
          height="240"
          className="w-full"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={`/images/projects/desktop/${image}.png`}
          width="1014"
          height="1470"
          className="md:group-hover:blur-sm"
        />
      </div>
      <div className="h-full w-full px-2 py-3 md:absolute md:bottom-0 md:flex md:flex-col md:justify-between md:bg-gradient-to-t md:from-[rgba(23,23,23,0.9)] md:from-15% md:via-transparent md:via-50% md:to-transparent md:p-6 md:transition-all md:group-hover:bg-[#171717] md:group-hover:bg-opacity-80">
        <div className="md:order-2">
          <h3 className="leading-0.9 mb-5 flex items-baseline gap-6 bg-transparent text-3xl font-semibold md:text-4xl">
            <span className="leading-0.9 text-xl font-bold text-primary-500 md:text-2xl">
              .0{index + 1}
            </span>{" "}
            <span className="font-bold">{title}</span>
          </h3>
          <div className="mb-4 flex flex-wrap gap-1 md:mb-0">
            {tags.map((tag) => (
              <Button key={tag} isAlwaysSmall>
                {tag}
              </Button>
            ))}
          </div>
        </div>
        <p className="md:leading-1.2 leading-1.4 text-sm font-semibold md:order-1 md:text-base md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
          {description}
        </p>
      </div>
    </article>
  );
}
