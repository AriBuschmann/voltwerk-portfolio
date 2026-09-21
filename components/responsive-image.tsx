/* eslint-disable @next/next/no-img-element */

type ResponsiveImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/about-solar-team.webp": { width: 1600, height: 900 },
  "/images/energy-management.webp": { width: 1600, height: 1200 },
  "/images/hero-solar-home.webp": { width: 1600, height: 901 },
  "/images/project-bielefeld.webp": { width: 1600, height: 901 },
  "/images/project-detmold.webp": { width: 1067, height: 1600 },
  "/images/project-guetersloh.webp": { width: 1067, height: 1600 },
  "/images/project-muenster.webp": { width: 1600, height: 1200 },
  "/images/project-paderborn.webp": { width: 1600, height: 1065 },
  "/images/project-soest.webp": { width: 1600, height: 1067 },
  "/images/solar-installation.webp": { width: 1600, height: 1200 },
};

function variant(src: string, width: number) {
  return src.replace(/\.webp$/, `-${width}.webp`);
}

export function ResponsiveImage({ src, alt, sizes, className, priority = false }: ResponsiveImageProps) {
  const dimensions = imageDimensions[src];
  const largestWidth = dimensions?.width ?? 1600;

  return (
    <img
      src={variant(src, 1600)}
      srcSet={`${variant(src, 640)} 640w, ${variant(src, 1024)} 1024w, ${variant(src, 1600)} ${largestWidth}w`}
      sizes={sizes}
      width={dimensions?.width ?? 1600}
      height={dimensions?.height ?? 1200}
      alt={alt}
      className={["responsive-image", className].filter(Boolean).join(" ")}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
