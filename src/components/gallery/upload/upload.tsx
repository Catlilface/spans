import { toast } from "@/hooks/use-toast";
import { UploadIcon } from "assets/icons";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const preventDefault = (event: React.DragEvent<HTMLLabelElement>) => {
  event.preventDefault();
  event.stopPropagation();
};

const GalleryUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0) as Blob;

    const url = URL.createObjectURL(file);

    dispatch({ type: "uploadeImage", payload: { message: [url] } });

    toast({
      title: "Image uploaded",
      description: "Your image has been successfully uploaded to the gallery",
    });
  };
  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const file = files?.item(0) as Blob;
    const url = URL.createObjectURL(file);

    if (!file || !file.type.includes("image")) {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid image file",
      });
      setIsDragging(false);

      return;
    }

    dispatch({ type: "uploadeImage", payload: { message: [url] } });
    setIsDragging(false);

    toast({
      title: "Image uploaded",
      description: "Your image has been successfully uploaded to the gallery",
    });
  };

  return (
    <div className="w-full md:max-w-[212px] bg-white rounded-[32px] p-1.5">
      <label
        ref={labelRef}
        htmlFor="makeMagic"
        data-dragging={isDragging}
        className="data-[dragging=true]:border-solid data-[dragging=true]:bg-black/5 transition-all cursor-pointer flex sm:flex-col items-center justify-center gap-2 border border-dashed border-pink w-full h-full py-2 sm:py-5 rounded-[28px]"
        onDrop={handleDrop}
        onDragEnter={(e) => {
          preventDefault(e);
          setIsDragging(true);
        }}
        onDragOver={(e) => {
          preventDefault(e);
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          preventDefault(e);
          setIsDragging(false);
        }}
      >
        <div className="[&>svg]:w-[48px] [&>svg]:h-[48px] sm:[&>svg]:w-full sm:[&>svg]:h-full">
          <UploadIcon />
        </div>
        <div className="b1 text-pink">Make magic</div>
        <input
          type="file"
          id="makeMagic"
          className="hidden"
          ref={inputRef}
          onChange={handleInput}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default GalleryUpload;
