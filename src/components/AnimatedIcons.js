export default function AnimatedIcons({ ...other }) {
  return (
    <div className="grid gap-2 md:grid-cols-4 md:gap-8" {...other}>
      <div className="icon-surface" />
      <div className="icon-cube" />
      <div className="icon-globe" />
      <div className="icon-bezier" />
    </div>
  );
}
