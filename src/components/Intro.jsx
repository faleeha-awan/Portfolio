import { personal } from "../data/data";

export default function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest">Intro</p>
      {personal.intro.map((para, i) => (
        <p key={i} className="text-text-secondary text-sm leading-relaxed font-body">
          {para}
        </p>
      ))}
    </section>
  );
}