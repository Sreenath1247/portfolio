"use client";

import Section from "@/components/Section";

interface Skill {
  name: string;
  category: string;
  icon: string;
  color: string;
  bg: string;
  colored?: boolean;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "devicon-react-original", color: "#61dafb", bg: "#0d2137", colored: true },
  // { name: "Next.js", category: "Frontend", icon: "devicon-nextjs-plain", color: "#ffffff", bg: "#111111" },
  { name: "JavaScript", category: "Frontend", icon: "devicon-javascript-plain", color: "#f7df1e", bg: "#1a1a00", colored: true },
  { name: "TypeScript", category: "Frontend", icon: "devicon-typescript-plain", color: "#3178c6", bg: "#0a1929", colored: true },
  { name: "HTML5", category: "Frontend", icon: "devicon-html5-plain", color: "#e34f26", bg: "#2a0e06", colored: true },
  { name: "CSS3", category: "Frontend", icon: "devicon-css3-plain", color: "#1572b6", bg: "#031a30", colored: true },
  { name: "Zustand", category: "State", icon: "devicon-zustand-plain", color: "#a78bfa", bg: "#1a1030", colored: true },
  { name: "Redux", category: "State", icon: "devicon-redux-original", color: "#764abc", bg: "#1a0a2e", colored: true },
  { name: "Jest", category: "Testing", icon: "devicon-jest-plain", color: "#15c213", bg: "#031a03", colored: true },
  { name: "Playwright", category: "Testing", icon: "devicon-playwright-plain", color: "#2ead33", bg: "#031a06", colored: true },
  { name: "Node.js", category: "Backend", icon: "devicon-nodejs-plain", color: "#6da55f", bg: "#0a1a08", colored: true },
  { name: "NestJS", category: "Backend", icon: "devicon-nestjs-plain", color: "#e0234e", bg: "#2a0010", colored: true },
  { name: "Java", category: "Backend", icon: "devicon-java-plain", color: "#f89820", bg: "#1a0e00", colored: true },
  { name: "Python", category: "Backend", icon: "devicon-python-plain", color: "#4584b6", bg: "#05101a", colored: true },
  { name: "Git", category: "Tools", icon: "devicon-git-plain", color: "#f05032", bg: "#2a0a06", colored: true },
  { name: "GitHub", category: "Tools", icon: "devicon-github-original", color: "#ffffff", bg: "#111111", colored: false },
  { name: "GitLab", category: "Tools", icon: "devicon-gitlab-plain", color: "#fc6d26", bg: "#1a0e00", colored: true },
  // { name: "Webpack", category: "Tools", icon: "devicon-webpack-plain", color: "#8dd6f9", bg: "#0a1a2a", colored: true },
  { name: "Jenkins", category: "Tools", icon: "devicon-jenkins-plain", color: "#d24939", bg: "#2a0a06", colored: true },
  { name: "Azure DevOps", category: "Tools", icon: "devicon-azuredevops-plain", color: "#0078d4", bg: "#001a30", colored: true },
];

export default function Skills() {
  return (
    <Section text="Skills" href="skills">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:-translate-y-1"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = skill.color;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "";
            }}
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-lg border"
              style={{
                background: skill.bg,
                borderColor: `${skill.color}33`,
              }}
            >
              <i
                className={`${skill.icon}${skill.colored ? " colored" : ""}`}
                style={{ fontSize: 28, color: skill.colored ? undefined : skill.color }}
              />
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-white">{skill.name}</p>
              <p className="mt-0.5 text-[10px] text-white/40">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}