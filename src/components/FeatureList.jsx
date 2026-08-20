const FeatureList = ({ features, dotClassName = 'bg-primary' }) => (
  <div className="mb-5">
    <h4 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      key features
    </h4>
    <ul className="space-y-1.5">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/75">
          <span className={`h-1 w-1 ${dotClassName} rounded-full mt-[6px] shrink-0`} />
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default FeatureList
