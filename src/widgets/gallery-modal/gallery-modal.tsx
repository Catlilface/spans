import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/shadcn/alert-dialog";
import { useNavigate, useParams } from "react-router-dom";
import { CopyIcon, CrossIcon } from "assets/icons";
import { toast } from "@/hooks/use-toast";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

const GalleryModal = () => {
  const navigate = useNavigate();
  const { breed, name } = useParams();

  return (
    <AlertDialog
      open
      onOpenChange={() => {
        navigate("/");
      }}
    >
      <AlertDialogContent className="bg-very-light-blue !rounded-none sm:!rounded-[32px] px-16 py-12 h-dvh w-screen max-w-none sm:h-auto sm:w-auto sm:max-w-[448px]">
        <AlertDialogTitle className="hidden">Share this image</AlertDialogTitle>
        <AlertDialogCancel className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-black-disabled rounded-full p-1 sm:p-[6px] bg-transparent">
          <CrossIcon />
        </AlertDialogCancel>
        <img
          className="w-full aspect-square object-cover rounded-[32px]"
          src={`https://images.dog.ceo/breeds/${breed}/${name}`}
          alt={name}
        />
        <h3 className="text-center">Share this with your social Community</h3>
        <div className="flex items-center justify-between sm:py-4 sm:px-6 py-2 px-4 bg-white rounded-full max-h-10 max-w-[250px] sm:max-w-none mx-auto">
          <div className="text-gray line-clamp-1">{window.location.href}</div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);

              toast({
                title: "Link copied to your clipboard",
              });
            }}
          >
            <CopyIcon />
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GalleryModal;
