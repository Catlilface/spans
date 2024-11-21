import { GalleryGrid } from "widgets";
import { GalleryAdvert, GalleryUpload } from "components";
import { Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="px-6 py-8 flex flex-col lg:flex-row gap-4 lg:gap-6">
      <div className="w-full lg:max-w-[212px] lg:order-1 flex lg:flex-col gap-4 lg:gap-6">
        <GalleryUpload />
        <GalleryAdvert
          images={[
            {
              src: "/images/upgrade-banner-small.webp",
              width: 300,
              alt: "Upgrade now!",
            },
            {
              src: "/images/upgrade-banner-middle.webp",
              width: 1920,
              alt: "Upgrade now!",
            },
          ]}
        />
      </div>
      <GalleryGrid />
      <Outlet />
    </div>
  );
};

export default Gallery;
