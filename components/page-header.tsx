interface PageHeaderProps {
  label: string
  title: string
  description?: string
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="pb-16 pt-32 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          {label}
        </p>
        <h1 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
