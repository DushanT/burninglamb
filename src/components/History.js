import Card from "./Card";
import { twMerge } from "tailwind-merge";
import historyCards from "@/data/history-cards";

export default function History({ className, ...other }) {
  return (
    <section
      className={twMerge("grid gap-2 md:grid-cols-3", className)}
      {...other}
    >
      {historyCards.map((card, index) => (
        <Card
          key={card.title}
          number={card.number}
          icon={card.icon}
          title={card.title}
          description={card.description}
          data-aos="fade-up"
          data-aos-delay={index * 50}
        />
      ))}
    </section>
  );
}
