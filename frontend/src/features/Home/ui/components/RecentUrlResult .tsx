import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import CopyButton from "../../../../components/CopyButton";

type RecentUrlResultProps = {
  url?: {
    shortLink: string;
    originalUrl?: string;
  };
};

const RecentUrlResult = ({ url }: RecentUrlResultProps) => {
  if (!url) return null;

  return (
    <div className="result-container flex flex-col  gap-2">

      <h3 className="pb-4 text-sm font-semibold text-(--text-primary)">
        Recent URL
      </h3>

      <motion.div
        className="result-card"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
      >
        <div className="mb-3 flex items-center gap-2 text-(--color-success-600)">
          <Sparkles size={14} strokeWidth={2} />
          <span className="text-xs font-medium">Your link is ready</span>
        </div>

        <div className="result-card-content">
          <div className="min-w-0">
            <a
              href={url.shortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="result-url hover:underline"
            >
              {url.shortLink}
            </a>
          </div>

          <div className="result-actions">
            <a
              href={url.shortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm btn-icon"
              aria-label="Open link in a new tab"
            >
              <ExternalLink size={18} />
            </a>

            <CopyButton
              text={url.shortLink}
              className="btn btn-primary btn-xs"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentUrlResult;
