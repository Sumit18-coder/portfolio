"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

type Status = "idle" | "sending";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Contact form isn't wired up yet — add EmailJS keys to .env.local.");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      toast.success("Message sent — thanks for reaching out.");
      form.reset();
    } catch {
      toast.error("Couldn't send that. Try emailing directly instead.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-page gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">Get in touch</p>
            <h2 className="font-display text-[28px] font-semibold text-text-primary">
              Open to new grad and backend roles
            </h2>
            <p className="mt-3 text-text-secondary">
              Software engineer, backend engineer, full stack, Java/Spring, or Node/MERN — happy to talk through any of it.
            </p>
            <div className="mt-6 flex flex-col gap-3.5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2.5 text-[15px] text-text-secondary hover:text-accent">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={profile.github.url} className="flex items-center gap-2.5 text-[15px] text-text-secondary hover:text-accent">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.linkedin} className="flex items-center gap-2.5 text-[15px] text-text-secondary hover:text-accent">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2.5 text-[15px] text-text-secondary hover:text-accent">
                <Phone size={16} /> {profile.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              name="from_name"
              type="text"
              placeholder="Your name"
              required
              className="focus-ring rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-text-primary placeholder:text-text-muted"
            />
            <input
              name="reply_to"
              type="email"
              placeholder="you@company.com"
              required
              className="focus-ring rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-text-primary placeholder:text-text-muted"
            />
            <textarea
              name="message"
              placeholder="What are you hiring for?"
              required
              rows={4}
              className="focus-ring resize-y rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-text-primary placeholder:text-text-muted"
            />
            <Button type="submit" variant="primary" disabled={status === "sending"} className="self-start disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
