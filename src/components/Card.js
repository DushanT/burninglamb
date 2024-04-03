export default function Card({ number, title, icon, description }) {
  return (
    <div className="grid place-items-stretch rounded-lg border-0.5 border-text-900 bg-[var(--bg-secondary)] px-5 pb-7 pt-4 md:pb-9 md:pt-5">
      <h3 className="mb-6 xl:mb-[110px]">
        <span className="md:text-11xl leading-0.8 mb-6.5 flex items-baseline justify-between text-8xl font-semibold text-primary-500 md:mb-6">
          <span>{number}</span>
          {icon}
        </span>
        <span className="leading-1.2 flex font-heading text-2xl lowercase md:text-3xl">
          {title}
        </span>
      </h3>
      <p className="leading-1.2 md:leading-1.2 font-semibold md:text-xl">
        {description}
      </p>
    </div>
  );
}
