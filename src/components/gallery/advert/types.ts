type GalleryAdvertProps = {
  images: GalleryAdvertImage[];
};

type GalleryAdvertImage = {
  src: string;
  width: number;
  alt: string;
};

export type { GalleryAdvertProps, GalleryAdvertImage };
