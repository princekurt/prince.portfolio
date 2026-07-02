import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">{site.copyright}</p>
      </div>
    </footer>
  );
}
