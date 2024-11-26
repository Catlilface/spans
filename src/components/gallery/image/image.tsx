import { LikedIcon, LikeIcon, TrashIcon } from "assets/icons";
import { GalleryImageProps } from "./types";
import { Suspense, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/shadcn/skeleton";
import { Img, resource } from "react-suspense-img";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { deleteImage } from "@/store";

const GalleryImage = ({ image }: GalleryImageProps) => {
  const [liked, setLiked] = useState(false);
  const likeRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const params = image.split("/");
  const imageName = params.pop();

  resource.preloadImage(image);

  const handleDelete = () => {
    dispatch(deleteImage(image));

    toast("Image deleted", {
      description: `Image "${imageName}" has been successfully deleted from the gallery`,
    });
  };

  useGSAP(() => {
    if (likeRef.current) {
      gsap.from(likeRef.current, { scale: 1.2, duration: 0.3 });
    }
  }, [liked]);

  return (
    <Suspense
      fallback={
        <Skeleton className="w-full h-full object-cover aspect-square rounded-3xl" />
      }
    >
      <div className="w-full h-full relative group overflow-hidden">
        <button
          onClick={() => setLiked(!liked)}
          data-liked={liked}
          ref={likeRef}
          className="absolute top-2 right-2 p-2 bg-white/25 rounded-full"
        >
          <LikeButtonIcon liked={liked} />
        </button>
        <Link to={`/image/${imageName}`}>
          <Img
            src={image}
            alt="dog"
            className="w-full h-full object-cover aspect-square rounded-3xl"
          />
        </Link>
        <button
          onClick={handleDelete}
          className="group-hover:bottom-2 transition-all delay-300 duration-300 absolute -bottom-full left-2 p-2 bg-white rounded-full"
        >
          <TrashIcon />
        </button>
      </div>
    </Suspense>
  );
};

const LikeButtonIcon = ({ liked }: { liked: boolean }) => {
  if (liked) {
    return <LikedIcon />;
  }

  return <LikeIcon />;
};

export default GalleryImage;
