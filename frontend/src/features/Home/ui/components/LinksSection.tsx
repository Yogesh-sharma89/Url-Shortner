import UrlCardPreview from "./UrlCardPreview";

const LinksSection = () => {
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

          <span className="badge badge-primary">3 links</span>
        </div>

        <div className="url-list">
          <UrlCardPreview
            shortUrl="shorten.app/aZ3kP9"
            originalUrl="github.com/sheryians/url-shortener"
            clicks={24}
            date="Sep 15, 2026"
          />
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
