import { useLayoutEffect, useRef, useState } from "react";
import { GalleryAdvertImage, GalleryAdvertProps } from "./types";

const getImage = (images: GalleryAdvertImage[], width: number) => {
  return images.find((image) => image.width > width) || images[0];
};

const GalleryAdvert = ({ images }: GalleryAdvertProps) => {
  const [image, setImage] = useState<GalleryAdvertImage | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (imgRef.current) {
      setImage(getImage(images, imgRef.current!.clientWidth));
    }

    window.addEventListener("resize", () => {
      setImage(getImage(images, imgRef.current!.clientWidth));
    });
  }, [images]);

  return <img {...image} ref={imgRef} className="hidden md:block" />;
};

export default GalleryAdvert;
