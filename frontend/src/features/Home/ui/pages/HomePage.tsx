import { useState } from "react";
import useGetUrls from "../../hooks/server/useGetUrls";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LinksSection, { type Url } from "../components/LinksSection";
import Navbar from "../components/Navbar";
import UrlShortenSection from "../components/UrlShortenSection";
import { UrlListEmpty } from "../skeletons/UrlListEmpty";
import UrlListSkeleton from "../skeletons/UrlListSkeleton";

import useDeleteUrl from "../../hooks/server/useDeleteUrl";
import { toast } from "sonner";
import DeleteDialog from "../components/DeleteDialog";
import RecentUrlResult from "../components/RecentUrlResult ";

const HomePage = () => {
  const [selectedUrlId, setSelectedUrlId] = useState<string | null>(null);

  const { data: urls, isLoading } = useGetUrls();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { mutateAsync: deleteUrl, isPending } = useDeleteUrl();

  const url: Url = urls?.find((url: Url) => url._id === selectedUrlId);

  const handleCloseDialog = () => {
    if (isPending) return;
    setIsDeleteDialogOpen(false);
    setSelectedUrlId(null);
  };

  const openDialog = (urlId: string) => {
    setSelectedUrlId(urlId);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteUrl = async (urlId: string) => {
    const validUrlId = urlId.trim();
    if (!validUrlId) {
      toast.error("Invalid Url to delete");
      return;
    }

    try {
      await toast
        .promise(deleteUrl(urlId), {
          loading: "Deleting Link...",
          success: () => {
            handleCloseDialog();
            return "Link deleted successfully";
          },
          error: (err) =>
            err.response?.data?.message || "Failed to delete link",
        })
        .unwrap();
    } catch (err) {
      console.log("failed to delete url :", err);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <main className="relative">
        {/* hero section  */}

        <HeroSection />

        {/* url shorten section  */}
        <UrlShortenSection />

        {
          urls?.length >0 && <RecentUrlResult url={urls?.[0]}/>
        }

        {isLoading ? (
          <UrlListSkeleton />
        ) : urls?.length === 0 ? (
          <UrlListEmpty />
        ) : (
          <LinksSection urls={urls} onDelete={openDialog} />
        )}
      </main>

      <Footer />

      <DeleteDialog
        open={isDeleteDialogOpen}
        onClose={handleCloseDialog}
        url={url?.shortLink}
        onConfirm={() => handleDeleteUrl(selectedUrlId!)}
        loading={isPending}
      />
    </div>
  );
};

export default HomePage;
