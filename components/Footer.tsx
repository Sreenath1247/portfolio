import type { SiteConfig } from "@/types";

type FooterProps = Pick<SiteConfig, "author" | "socialLinks">;

export default function Footer({ author, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white">
      <ul className="mb-5 flex flex-wrap justify-center gap-x-5 text-xs">
        {socialLinks.map(({ text, href }) => (
          <li key={text}>
            <a
              href={href}
              target="_blank"
              className="inline-block px-4 py-3 after:relative after:-bottom-1 after:content-[url(/external.svg)] hover:text-primary"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs">
        {author} © {currentYear}. <span className="text-neutral">Designed & Developed by</span>{" "}
        Moisés Machuca
      </p>
    </footer>
  );
}
