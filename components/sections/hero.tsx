import { profile } from "@/content/profile";
import { LinkButton } from "@/components/ui/button";
import { ApiConsole } from "@/components/sections/api-console";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <header className="border-b border-border-soft pb-20 pt-20 md:pb-24 md:pt-24">
      <div className="mx-auto grid max-w-page gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 md:px-8">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
            {"// available for new grad + backend roles"}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-text-primary md:text-[46px]">
            {profile.tagline.split("backend systems").map((chunk, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {chunk}
                  <span className="text-accent">backend systems</span>
                </span>
              ) : (
                <span key={i}>{chunk}</span>
              )
            )}
          </h1>
          <p className="mt-5 max-w-md text-lg text-text-secondary">{profile.subhead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary">View projects</LinkButton>
            <LinkButton href={profile.resumeFile} download variant="ghost">Download resume</LinkButton>
            <LinkButton href="#contact" variant="ghost">Get in touch</LinkButton>
          </div>

          <div className="mt-9 flex flex-wrap gap-6">
            <a href={profile.github.url} className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent">
              <Github size={14} /> GitHub
            </a>
            <a href={profile.linkedin} className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent">
              <Mail size={14} /> {profile.email}
            </a>
            <span className="flex items-center gap-1.5 text-xs text-text-muted">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </div>

        <ApiConsole />
      </div>
    </header>
  );
}
