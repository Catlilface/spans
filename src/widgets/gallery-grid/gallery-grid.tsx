import { RootState, useGetImagesQuery } from "@/store/gallery/store";
import { GalleryControls, GalleryImage } from "components";
import { useSelector } from "react-redux";

const GalleryGrid = () => {
  useGetImagesQuery("hound");
  const dogs = useSelector((state: RootState) => state.uploadeImage);

  return (
    <div className="bg-white p-6 rounded-[32px] w-full">
      <div className="flex items-center justify-between">
        <h2 className="h2">Gallery</h2>
        <GalleryControls />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mt-6">
        {dogs.map((image, index) => (
          <GalleryImage image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
