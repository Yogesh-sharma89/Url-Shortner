import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Trash2, X } from "lucide-react";

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
          className="
            fixed inset-0 z-999
            flex min-h-dvh
            items-center justify-center
            overflow-y-auto
            bg-(--surface-overlay)
            p-4
            backdrop-blur-sm
            sm:p-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-xl
              border
              border-(--border-primary)
              bg-(--bg-elevated)
              p-6
              text-(--text-primary)
              shadow-(--shadow-xl)
            "
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Ambient danger glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-16 -top-16
                h-40 w-40
                rounded-full
                bg-(--color-danger-500)
                opacity-[0.08]
                blur-3xl
              "
            />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="
                  relative grid size-11 shrink-0 place-items-center
                  rounded-lg border
                  border-(--color-danger-100)
                  bg-(--color-danger-50)
                  text-(--color-danger-600)
                "
              >
                <AlertTriangle size={21} strokeWidth={1.8} />
              </motion.div>

              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                aria-label="Close delete dialog"
                className="
                  grid size-8 shrink-0 cursor-pointer place-items-center
                  rounded-md border border-transparent
                  bg-transparent
                  text-(--text-tertiary)
                  transition-colors duration-200
                  hover:bg-(--bg-hover)
                  hover:text-(--text-primary)
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--color-danger-500)
                  disabled:cursor-not-allowed disabled:opacity-50
                "
              >
                <X size={17} />
              </button>
            </div>

            {/* Content */}
            <div className="relative mt-5">
              <h2
                id="delete-dialog-title"
                className="
                  text-lg font-semibold tracking-tight
                  text-(--text-primary)
                "
              >
                Delete this link?
              </h2>

              <p
                id="delete-dialog-description"
                className="mt-2 text-sm leading-6 text-(--text-secondary)"
              >
                This can't be undone. Once deleted, the short link stops working
                immediately for anyone who has it.
              </p>

              {/* URL preview */}
              {url && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.2 }}
                  className="
                    mt-5 flex min-w-0 items-center gap-3
                    rounded-md border border-l-[3px]
                    border-(--border-primary)
                    border-l-(--color-danger-500)
                    bg-(--bg-tertiary)
                    px-3.5 py-3
                  "
                >
                  <Trash2
                    size={14}
                    strokeWidth={1.8}
                    className="shrink-0 text-(--color-danger-600)"
                  />

                  <span
                    title={url}
                    className="
                      min-w-0 truncate font-mono text-xs
                      text-(--text-secondary)
                    "
                  >
                    {url}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Actions */}
            <div
              className="
                relative mt-7
                flex flex-col-reverse gap-2.5
                sm:flex-row sm:justify-end
              "
            >
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="
                  inline-flex min-h-11 w-full cursor-pointer
                  items-center justify-center gap-2
                  rounded-md border
                  border-(--border-primary)
                  bg-(--bg-secondary)
                  px-4 text-sm font-medium
                  text-(--text-primary)
                  transition-colors duration-200
                  hover:bg-(--bg-hover)
                  hover:border-(--border-secondary)
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--color-primary-500)
                  disabled:cursor-not-allowed disabled:opacity-50
                  sm:w-auto
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={onConfirm}
                disabled={loading}
                className="
                  inline-flex min-h-11 w-full cursor-pointer
                  items-center justify-center gap-2
                  rounded-md border
                  border-(--color-danger-500)
                  bg-(--color-danger-600)
                  px-4 text-sm font-semibold text-white
                  shadow-(--shadow-sm)
                  transition-colors duration-200
                  hover:bg-(--color-danger-700)
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--color-danger-500)
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-(--bg-elevated)
                  disabled:cursor-not-allowed disabled:opacity-50
                  disabled:shadow-none
                  sm:w-auto
                "
              >
                {loading ? (
                  <>
                    <span
                      className="
                        size-4 animate-spin rounded-full
                        border-2 border-white/30 border-t-white
                      "
                    />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={15} strokeWidth={2} />
                    Delete link
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
