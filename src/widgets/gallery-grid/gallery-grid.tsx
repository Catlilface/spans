import {
  addImages,
  getAllImages,
  useGetImagesQuery,
} from "@/store/gallery/store";
import { GalleryControls, GalleryImage } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GalleryGrid = () => {
  const { data } = useGetImagesQuery("hound");
  const images = useSelector(getAllImages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (images.length === 0 && data?.length) {
      dispatch(addImages(data));
    }
  }, [data, dispatch, images.length]);

  return (
    <div className="bg-white p-6 rounded-[32px] w-full">
      <div className="flex items-center justify-between">
        <h2 className="h2">Gallery</h2>
        <GalleryControls />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mt-6">
        {images.map((image) => (
          <GalleryImage image={image} key={image} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
