import type { Metadata } from "next";
import { profile } from "@/content/profile";

export function buildMetadata(): Metadata {
  const title = `${profile.name} — ${profile.role}`;
  const description = profile.subhead;

  return {
    metadataBase: new URL(profile.siteUrl),
    title: {
      default: title,
      template: `%s — ${profile.name}`,
    },
    description,
    keywords: [
      "Sumit Avhale",
      "Software Engineer",
      "Backend Engineer",
      "Full Stack Developer",
      "Java Developer",
      "Spring Boot Developer",
      "Node.js Developer",
      "MERN Developer",
    ],
    authors: [{ name: profile.name, url: profile.siteUrl }],
    creator: profile.name,
    openGraph: {
      type: "website",
      url: profile.siteUrl,
      title,
      description,
      siteName: `${profile.name} — Portfolio`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: profile.siteUrl,
    sameAs: [profile.github.url, profile.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.school,
    },
  };
}
