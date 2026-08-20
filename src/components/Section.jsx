import Reveal from './Reveal'

const Section = ({ id, className = 'py-20 md:py-28', index, title, description, children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>
    <div className="container mx-auto px-6">
      {(title || index) && (
        <Reveal>
          <div className="mb-12 md:mb-16 max-w-2xl">
            {index && (
              <div className="font-mono text-sm text-primary mb-3 flex items-center gap-3">
                <span>{index}.</span>
                <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        </Reveal>
      )}
      {children}
    </div>
  </section>
)

export default Section
