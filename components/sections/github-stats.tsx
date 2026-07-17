import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Star, GitFork, BookMarked } from "lucide-react";

type Repo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
};

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

async function getGithubData() {
  const username = profile.github.username;
  if (!username || username.startsWith("REPLACE")) return null;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { next: { revalidate: 3600 } }),
    ]);
    if (!userRes.ok || !reposRes.ok) return null;

    const user = (await userRes.json()) as GithubUser;
    const repos = (await reposRes.json()) as Repo[];
    return { user, repos };
  } catch {
    return null;
  }
}

export async function GithubStats() {
  const data = await getGithubData();

  return (
    <section className="border-b border-border-soft py-20 md:py-24">
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading
          eyebrow="Open source"
          title="GitHub activity"
          description={
            data
              ? "Live stats and recent repositories, pulled directly from the GitHub API."
              : "Add a real GitHub username in content/profile.ts to pull live stats and repositories here."
          }
        />

        {data ? (
          <>
            <div className="mb-8 grid grid-cols-3 gap-4">
              <StatCard label="Public repos" value={data.user.public_repos} />
              <StatCard label="Followers" value={data.user.followers} />
              <StatCard label="Following" value={data.user.following} />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  className="focus-ring rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <div className="flex items-center gap-2 font-mono text-sm text-text-primary">
                    <BookMarked size={14} className="text-accent" /> {repo.name}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-text-muted">
                    {repo.language ? <span>{repo.language}</span> : null}
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-text-muted">
            GitHub stats will appear here automatically once a real username is set.
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 text-center">
      <p className="font-display text-2xl font-semibold text-text-primary">{value}</p>
      <p className="mt-1 text-xs text-text-muted">{label}</p>
    </div>
  );
}
