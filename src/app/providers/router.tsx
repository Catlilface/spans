import { createBrowserRouter } from "react-router-dom";
import { Gallery } from "pages/gallery";
import { Auth, Layout } from "pages";
import { GalleryModal } from "widgets/gallery-modal";
import { Toaster } from "@/components/shadcn/toaster";
import { Toaster as SonnerToaster } from "@/components/shadcn/sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Gallery />
        <Toaster />
        <SonnerToaster />
      </Layout>
    ),
    children: [
      {
        path: "/image/:breed/:name",
        element: <GalleryModal />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
