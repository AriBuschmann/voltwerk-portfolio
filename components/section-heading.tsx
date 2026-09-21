type SectionHeadingProps = { eyebrow: string; title: string; copy?: string; id?: string };
export function SectionHeading({ eyebrow, title, copy, id }: SectionHeadingProps) { return <div><p className="eyebrow">{eyebrow}</p><h2 className="headline" id={id}>{title}</h2>{copy && <p className="lead">{copy}</p>}</div>; }
