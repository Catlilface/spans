import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/shadcn/alert-dialog";
import { useNavigate, useParams } from "react-router-dom";
import { CopyIcon, CrossIcon } from "assets/icons";
import { toast } from "@/hooks/use-toast";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { store } from "@/store";

const GalleryModal = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const image = store.getState().images.find((image) => image.endsWith(name!));

  return (
    <AlertDialog
      open
      onOpenChange={() => {
        navigate("/");
      }}
    >
      <AlertDialogContent className="bg-very-light-blue !rounded-none sm:!rounded-[32px] sm:px-16 sm:py-12 h-dvh w-screen max-w-none sm:h-auto sm:w-auto sm:max-w-[448px] flex flex-col justify-center gap-6">
        <AlertDialogTitle className="hidden">Share this image</AlertDialogTitle>
        <AlertDialogCancel className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-black-disabled rounded-full p-1 sm:p-[6px] bg-transparent">
          <CrossIcon />
        </AlertDialogCancel>
        <img
          className="w-full aspect-square object-cover rounded-[32px]"
          src={image}
          alt={name}
          width={320}
          height={320}
        />
        <h3 className="text-center text-2xl font-bold">
          Share this with your social Community
        </h3>
        <div className=" w-full max-w-full overflow-hidden">
          <div className="text-gray w-full max-w-full bg-white sm:px-6 sm:py-4 rounded-full flex py-2 px-4">
            <div className="w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {window.location.href}
            </div>

            <button
              className="w-full max-w-full flex-1"
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
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GalleryModal;
