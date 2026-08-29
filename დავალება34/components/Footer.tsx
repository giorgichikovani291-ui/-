import type { SocialLink } from "@/types";
import { GithubIcon, CodepenIcon, LinkedinIcon, TwitterIcon } from "./icons";

const socials: SocialLink[] = [
  { name: "Github", href: "https://github.com/" },
  { name: "Codepen", href: "https://codepen.io/" },
  { name: "LinkedIn", href: "https://linkedin.com/" },
  { name: "Twitter", href: "https://twitter.com/" },
];

const icons = [GithubIcon, CodepenIcon, LinkedinIcon, TwitterIcon];

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-white/10 px-6 py-8 md:px-10 lg:px-16">
      <span className="text-lg font-bold lowercase">chiko</span>
      <div className="flex items-center gap-5">
        {socials.map((social, i) => {
          const Icon = icons[i];
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="text-white transition-colors hover:text-accent"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
