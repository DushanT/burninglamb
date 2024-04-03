import Image from "next/image";

export default function AnimatedIcons() {
  return (
    <div className="grid gap-2 md:grid-cols-4 md:gap-8">
      <div className="icon-surface" />
      <div className="icon-cube" />
      <div className="icon-surface" />
      <div className="icon-surface" />
    </div>
  );
}
