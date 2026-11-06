"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { MediaLoading } from "./MediaLoading";

type SmartImageProps = ImageProps & {
  loadingLabel?: string;
  darkLoading?: boolean;
  wrapperClassName?: string;
};

export function SmartImage({
  loadingLabel = "Loading image…",
  darkLoading = false,
  wrapperClassName = "",
  className = "",
  src,
  alt,
  onLoad,
  priority,
  ...props
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(Boolean(priority));

  useEffect(() => {
    setLoaded(Boolean(priority));
    const timer = window.setTimeout(() => setLoaded(true), 800);
    return () => window.clearTimeout(timer);
  }, [src, priority]);

  return (
    <div className={`relative h-full w-full ${wrapperClassName}`}>
      {!loaded ? <MediaLoading label={loadingLabel} dark={darkLoading} /> : null}
      <Image
        {...props}
        src={src}
        alt={alt}
        priority={priority}
        className={className}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}
