import { motion } from "framer-motion";
import CopyButton from "../../../../components/CopyButton";
import type { Url } from "./LinksSection";
import FormatDate from "../../../../utils/formatDate";

interface UrlCardPreviewProps {
  url: Url;
  onDelete: (urlId: string) =>void;
}

const UrlCardPreview = ({ url, onDelete }: UrlCardPreviewProps) => {
  return (
    <motion.article
      className="url-card"
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="url-card-top">
        <div className="url-card-main">
          <a
            href={url?.shortLink}
            target="_blank"
            className="url-card-short hover:underline"
          >
            {url?.shortLink}
          </a>

          <p className="url-card-original max-w-25">{url?.originalUrl}</p>
        </div>

        <div className="url-card-actions">
          <CopyButton text={url?.originalUrl} className={"btn btn-secondary btn-sm"} />

          <button type="button" className="btn btn-danger btn-sm" onClick={()=>{
            onDelete(url._id)
          }}>
            Delete
            
          </button>
        </div>
      </div>

      <div className="url-card-meta">
        <span className="url-card-stat">{url?.clicks} clicks</span>

        <span className="divider-vertical" />

        <span>{FormatDate(url?.createdAt)}</span>
      </div>
    </motion.article>
  );
};

export default UrlCardPreview;
