import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost";
  asChild?: boolean;
};

const base =
  "inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5 focus-ring";

const variants = {
  primary: "bg-accent border-accent text-accent-ink hover:brightness-105",
  ghost: "bg-surface border-border text-text-primary hover:border-accent",
};

export function Button({ className, variant = "ghost", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function LinkButton({
  href,
  variant = "ghost",
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { variant?: "primary" | "ghost" }) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
