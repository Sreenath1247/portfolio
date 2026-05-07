import type { AboutProps, HeroProps } from "@/types";
import Section from "@/components/Section";
import TerminalCard from "./TerminalCard";

type AboutSectionProps = AboutProps & Pick<HeroProps, "name">;

export default function About({ description, name }: AboutSectionProps) {
  return (
    <Section text="About Me" href="about">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8">
        <p className="w-auto text-base text-neutral md:pr-5">{description}</p>
        <div className="h-100 w-64 shrink-0 rotate-[5deg] md:rotate-[7deg]">
          <TerminalCard />
        </div>
      </div>
    </Section>
  );
}
