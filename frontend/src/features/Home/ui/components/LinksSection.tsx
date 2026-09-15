import { toast } from "sonner";
import FormatDate from "../../../../utils/formatDate";
import useDeleteUrl from "../../hooks/server/useDeleteUrl";
import UrlCardPreview from "./UrlCardPreview";

export interface Url {
  _id: string;
  originalUrl: string;
  shortCode: string;
  shortLink: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
}

const LinksSection = ({ urls }: { urls: Url[] }) => {
  const { mutateAsync: deleteUrl, isPending } = useDeleteUrl();

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
    <section className="links-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Your links</h2>

            <p className="section-subtitle">
              Manage and track your shortened URLs.
            </p>
          </div>

          <span className="badge badge-primary">{urls?.length} links</span>
        </div>

        <div className="url-list">
          {urls.map((url) => (
            <UrlCardPreview
              key={url._id}
              url={url}
              isPending={isPending}
              onDelete={(urlId:string)=>handleDeleteUrl(urlId)}
              shortUrl={url.shortLink}
              originalUrl={url.originalUrl}
              clicks={url.clicks}
              date={FormatDate(url.createdAt)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
