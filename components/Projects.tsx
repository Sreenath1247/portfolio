import Image from "next/image";
import type { ProjectProps } from "@/types";
import Section from "@/components/Section";

interface ProjectsSectionProps {
  projects: ProjectProps[];
}

export default function Projects({ projects }: ProjectsSectionProps) {
  return (
    <Section text="Featured Projects" href="projects">
      {projects.map(({ name, summary, image, linkPreview, linkSource }, index) => {
        const top = 98 + index * 40;
        return (
          <div
            style={{ top }}
            className="sticky mb-12 rounded-2xl border border-neutral/20 bg-black"
            key={name}
          >
            <div className="bg-difu relative z-1 grid h-145 w-full grid-rows-2 rounded-2xl bg-[#1c232d]/85 before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-[url('https://astro-zen.vercel.app/raja.png')] before:bg-size-[128px] before:bg-repeat before:opacity-5 before:content-[''] sm:grid-cols-2 sm:grid-rows-1 md:h-96">
              <div className="px-6 pt-12">
                <h3 className="mb-5 font-serif text-3xl font-medium text-primary">{name}</h3>
                <p className="text-base text-neutral">{summary}</p>
                <div className="flex gap-5 pt-10 text-white">
                  <a
                    href={linkSource}
                    target="_blank"
                    className="after:relative after:-bottom-1.25 after:content-[url(/external.svg)] hover:underline"
                  >
                    Source
                  </a>
                  <a
                    href={linkPreview}
                    target="_blank"
                    className="after:relative after:-bottom-1.25 after:content-[url(/external.svg)] hover:underline"
                  >
                    Preview
                  </a>
                </div>
              </div>
              <div className="flex items-end justify-end overflow-hidden">
                <Image
                  className="h-full w-[95%] rounded-ss-xl rounded-ee-2xl object-none object-top-left sm:h-[85%] sm:w-full"
                  src={image}
                  alt={name}
                  width={736}
                  height={483}
                />
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
