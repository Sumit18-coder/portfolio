import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-3 px-6 text-sm text-text-muted md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-5">
          <a href={profile.github.url} className="hover:text-accent">GitHub</a>
          <a href={profile.linkedin} className="hover:text-accent">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
        </div>
      </div>
    </footer>
  );
}
