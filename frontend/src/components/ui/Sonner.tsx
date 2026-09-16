import { Toaster as SonnerToaster } from "sonner";
import type { CSSProperties } from "react";

interface SonnerProviderProps {
  theme?: "light" | "dark" | "system";
}

export const SonnerProvider = ({ theme = "system" }: SonnerProviderProps) => {
  return (
    <SonnerToaster
      // 1. Core Structural Behaviors
      theme={theme}
      position="top-right"
      visibleToasts={5}
      expand={false} // Keeps toasts stacked cleanly until hovered
      closeButton={true}
      richColors={true}
      duration={4000}
      gap={12} // Clean space allocation between stacked nodes
      // 2. Performance Interactivity
      style={{ fontFamily: "'Sora', 'Inter', sans-serif" }} // Production typography setup
      toastOptions={{
        // Global styles applied to every single toast structure block
        className:
          "group font-sans text-sm rounded-2xl p-4 shadow-xl border flex items-center gap-3 transition-all duration-300 ease-out",

        // Detailed Theme Token Injections via CSS Variable Interception
        style: {
          // Dynamic overrides ensuring strict contrast alignments
          // Light Mode defaults (overwritten by global CSS selectors if needed)
          "--normal-bg": "#FFFBF5",
          "--normal-border": "rgba(31, 26, 18, 0.08)",
          "--normal-text": "#231C12",

          // Rich State Overrides (Fine-tuning Sonner's default color intensities)
          "--success-bg": "#ECFDF5",
          "--success-border": "#A7F3D0",
          "--success-text": "#065F46",

          "--error-bg": "#FEF2F2",
          "--error-border": "#FEE2E2",
          "--error-text": "#991B1B",

          "--warning-bg": "#FFFBEB",
          "--warning-border": "#FEF3C7",
          "--warning-text": "#92400E",

          "--info-bg": "#EFF6FF",
          "--info-border": "#BFDBFE",
          "--info-text": "#1E40AF",
        } as CSSProperties & Record<string, string>,

        // Granular Class Mappings for specific structural states
        classNames: {
          toast:
            "bg-[var(--normal-bg)] text-[var(--normal-text)] border-[var(--normal-border)] dark:bg-[#121212] dark:text-[#F2F2EE] dark:border-[rgba(255,255,255,0.08)]",
          title: "font-semibold tracking-tight text-[14px]",
          description: "text-[12px] opacity-80 mt-0.5 leading-relaxed",

          // Action button styling (e.g., Undo, Retry)
          actionButton:
            "cursor-pointer rounded-xl text-xs font-bold px-3 py-1.5 transition-colors bg-[#cdff2b] text-[#0a0a0a] hover:bg-[#bceb24] active:scale-95 duration-200 dark:bg-[#cdff2b] dark:text-[#0a0a0a]",
          cancelButton:
            "cursor-pointer rounded-xl text-xs font-semibold px-3 py-1.5 transition-colors bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",

          // Close button structural customization
          closeButton:
            "cursor-pointer opacity-0 group-hover:opacity-100 absolute top-2 right-2 border transition-all duration-200 rounded-lg p-0.5 bg-white border-neutral-200 text-neutral-500 hover:bg-neutral-50 dark:bg-[#1E1E1E] dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800",

          // Success & Error contextual extensions
          success:
            "bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)] dark:bg-[#064e3b]/30 dark:border-[#064e3b]/50 dark:text-[#34d399]",
          error:
            "bg-[var(--error-bg)] border-[var(--error-border)] text-[var(--error-text)] dark:bg-[#7f1d1d]/30 dark:border-[#7f1d1d]/50 dark:text-[#f87171]",
          warning:
            "bg-[var(--warning-bg)] border-[var(--warning-border)] text-[var(--warning-text)] dark:bg-[#78350f]/30 dark:border-[#78350f]/50 dark:text-[#fbbf24]",
          info: "bg-[var(--info-bg)] border-[var(--info-border)] text-[var(--info-text)] dark:bg-[#1e3a8a]/30 dark:border-[#1e3a8a]/50 dark:text-[#60a5fa]",
        },
      }}
    />
  );
};
