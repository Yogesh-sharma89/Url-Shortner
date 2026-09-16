
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

const LinksSection = ({ urls,onDelete }: { urls: Url[],onDelete:(urlId:string)=>void }) => {
 

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
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
