export default function PagePlaceholder({ title }: { title: string }) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-6 py-24 lg:px-8">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal">
        Coming soon
      </p>
      <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">{title}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        This page is a placeholder. Keep prompting to fill in the {title} page
        content and it will be built out.
      </p>
    </section>
  );
}
