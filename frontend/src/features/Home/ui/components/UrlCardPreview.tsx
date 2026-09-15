import {motion} from "framer-motion";
import CopyButton from "../../../../components/CopyButton";

interface UrlCardPreviewProps{
    shortUrl:string,
    originalUrl?:string,
    clicks:number,
    date:string
}

const UrlCardPreview = ({
 shortUrl,originalUrl,clicks,date
}:UrlCardPreviewProps) => {

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
                    <span className="url-card-short">
                        {shortUrl}
                    </span>

                    <p className="url-card-original">
                        {originalUrl}
                    </p>
                </div>

                <div className="url-card-actions">
                    <CopyButton text={shortUrl} className={"btn btn-secondary btn-sm"}/>

                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className="url-card-meta">
                <span className="url-card-stat">
                    {clicks} clicks
                </span>

                <span className="divider-vertical" />

                <span>{date}</span>
            </div>
        </motion.article>
  )
}

export default UrlCardPreview
