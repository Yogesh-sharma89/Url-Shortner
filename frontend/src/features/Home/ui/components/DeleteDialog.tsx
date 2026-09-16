import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Trash2 } from "lucide-react";

type DeleteDialogProps = {
  open: boolean;
  url?: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

const DeleteDialog = ({
  open,
  url,
  loading = false,
  onClose,
  onConfirm,
}: DeleteDialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            className="modal"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header flex items-start gap-3">
              <span
                className="
                  grid size-8 shrink-0 place-items-center
                  rounded-md
                  bg-(--color-danger-50)
                  text-(--color-danger-600)
                "
              >
                <AlertTriangle size={16} strokeWidth={2} />
              </span>

              <div className="min-w-0">
                <h2 id="delete-dialog-title" className="modal-title">
                  Delete this link?
                </h2>

                <p
                  id="delete-dialog-description"
                  className="modal-description"
                >
                  This can't be undone. Once deleted, the short link
                  stops working immediately.
                </p>
              </div>
            </div>

            {url && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.06, duration: 0.15 }}
                title={url}
                className="
                  mt-4 truncate
                  rounded-md border
                  border-(--border-primary)
                  bg-(--bg-tertiary)
                  px-3 py-2
                  font-mono text-xs
                  text-(--text-secondary)
                "
              >
                {url}
              </motion.div>
            )}

            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={onConfirm}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner spinner-sm" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={14} strokeWidth={2} />
                    Delete
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteDialog;