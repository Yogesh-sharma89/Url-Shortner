import { motion } from "framer-motion";

export const UrlCardSkeleton = () => {
    return (
        
        <motion.article
            className="url-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
        >
            <div className="url-card-top">

                {/* Main URL content */}
                <div className="url-card-main">
                    <div
                        className="skeleton skeleton-text-lg"
                        style={{ width: "180px" }}
                    />

                    <div
                        className="skeleton skeleton-text"
                        style={{
                            width: "280px",
                            marginTop: "10px",
                        }}
                    />
                </div>

                {/* Actions */}
                <div className="url-card-actions">
                    <div className="skeleton skeleton-button" />

                    <div className="skeleton skeleton-button" />
                </div>
            </div>

            {/* Metadata */}
            <div className="url-card-meta">

                <div
                    className="skeleton skeleton-text-sm"
                    style={{ width: "70px" }}
                />

                <span className="divider-vertical" />

                <div
                    className="skeleton skeleton-text-sm"
                    style={{ width: "100px" }}
                />

            </div>
        </motion.article>
    );
};