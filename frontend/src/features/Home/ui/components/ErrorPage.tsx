import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router";

type ErrorPageProps = {
  code?: string | number;
  title?: string;
  description?: string;
  detail?: string;
  onRetry?: () => void;
};

type ResolvedError = {
  code: string;
  title: string;
  description: string;
  detail?: string;
};

export default function ErrorPage({
  code,
  title,
  description,
  detail,
  onRetry,
}: ErrorPageProps) {
  const navigate = useNavigate();
  const routeError = useRouteError();

  const resolved = resolveError({
    code,
    title,
    description,
    detail,
    routeError,
  });

  return (
    <main className="flex min-h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center px-4 pt-8 pb-16 text-center">
      <style>{KEYFRAMES}</style>

      {/* ---------- Artwork stage ---------- */}
      <div className="relative grid w-full max-w-[320px] place-items-center mb-8">
        {/* Soft radial wash — the one decorative element on the page */}
        <div
          aria-hidden="true"
          className="error-glow pointer-events-none absolute inset-[-20%] animate-[error-glow_5.5s_ease-in-out_infinite] motion-reduce:animate-none"
        />

        <svg
          viewBox="0 0 240 190"
          role="img"
          aria-label="A broken chain link"
          className="relative w-full h-auto overflow-visible"
        >
          <ellipse
            cx="120"
            cy="168"
            rx="62"
            ry="8"
            className="fill-(--text-primary) opacity-[0.07] animate-[error-float_5.5s_ease-in-out_infinite] motion-reduce:animate-none"
          />

          <path
            d="M104 44H74a42 42 0 0 0 0 84h30"
            className="fill-none stroke-(--color-primary) stroke-14 [stroke-linecap:round] origin-center animate-[error-snap-left_900ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
          />

          <path
            d="M136 44h30a42 42 0 0 1 0 84h-30"
            className="fill-none stroke-(--color-primary) stroke-14 [stroke-linecap:round] origin-center animate-[error-snap-right_900ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
          />

          {/* Sparks at the break */}
          <line
            x1="120"
            y1="62"
            x2="120"
            y2="48"
            className="stroke-(--color-primary-400) stroke-6 [stroke-linecap:round] origin-center animate-[error-spark_900ms_ease-out_260ms_both] motion-reduce:hidden"
          />
          <line
            x1="120"
            y1="86"
            x2="120"
            y2="86"
            className="stroke-(--color-primary-400) stroke-6 [stroke-linecap:round] origin-center animate-[error-spark_900ms_ease-out_320ms_both] motion-reduce:hidden"
          />
          <line
            x1="120"
            y1="110"
            x2="120"
            y2="124"
            className="stroke-(--color-primary-400) stroke-6 [stroke-linecap:round] origin-center animate-[error-spark_900ms_ease-out_380ms_both] motion-reduce:hidden"
          />
        </svg>
      </div>

      {/* ---------- Content ---------- */}
      <span className="block mb-3 font-mono text-(--font-size-sm) font-medium tracking-[0.08em] text-(--text-muted) animate-[error-rise_620ms_ease-out_380ms_both] motion-reduce:animate-none">
        {resolved.code}
      </span>

      <h1 className="max-w-[20ch] mb-4 text-[clamp(1.75rem,5vw,2.5rem)] font-bold tracking-[-0.03em] text-(--text-primary) animate-[error-rise_620ms_ease-out_460ms_both] motion-reduce:animate-none">
        {resolved.title}
      </h1>

      <p className="max-w-[44ch] mb-8 text-(--font-size-md) leading-[1.7] text-(--text-secondary) animate-[error-rise_620ms_ease-out_540ms_both] motion-reduce:animate-none">
        {resolved.description}
      </p>

      <div className="flex flex-wrap justify-center gap-3 max-[480px]:w-full max-[480px]:flex-col animate-[error-rise_620ms_ease-out_620ms_both] motion-reduce:animate-none">
        <button
          onClick={() => navigate("/home")}
          className="btn btn-primary max-[480px]:w-full"
        >
          Back to home
        </button>

        {onRetry ? (
          <button
            onClick={onRetry}
            className="btn btn-secondary max-[480px]:w-full"
          >
            Try again
          </button>
        ) : (
          <button
            onClick={() => navigate("/home")}
            className="btn btn-secondary max-[480px]:w-full"
          >
            Go back
          </button>
        )}
      </div>

      {resolved.detail && (
        <p className="max-w-full mt-8 px-4 py-3 rounded-md border border-(--border-primary) bg-(--bg-tertiary) font-mono text-(--font-size-xs) leading-[1.35] text-(--text-tertiary) wrap-anywhere animate-[error-rise_620ms_ease-out_700ms_both] motion-reduce:animate-none">
          {resolved.detail}
        </p>
      )}
    </main>
  );
}

const KEYFRAMES = `
.error-glow {
  background: radial-gradient(circle at center, var(--color-primary-100) 0%, transparent 68%);
  opacity: .55;
}
[data-theme="dark"] .error-glow {
  background: radial-gradient(circle at center, rgba(194,140,73,.22) 0%, transparent 68%);
  opacity: 1;
}
@media (prefers-color-scheme: dark) {
  [data-theme="system"] .error-glow {
    background: radial-gradient(circle at center, rgba(194,140,73,.22) 0%, transparent 68%);
    opacity: 1;
  }
}
@keyframes error-snap-left {
  0%   { transform: translateX(26px) rotate(0deg); opacity: 0; }
  55%  { opacity: 1; }
  100% { transform: translateX(0) rotate(-7deg); opacity: 1; }
}
@keyframes error-snap-right {
  0%   { transform: translateX(-26px) rotate(0deg); opacity: 0; }
  55%  { opacity: 1; }
  100% { transform: translateX(0) rotate(7deg); opacity: 1; }
}
@keyframes error-spark {
  0%   { opacity: 0; transform: scale(.4); }
  40%  { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.35); }
}
@keyframes error-rise {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes error-glow {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.08); }
}
@keyframes error-float {
  0%, 100% { transform: scaleX(1); opacity: .07; }
  50%      { transform: scaleX(.88); opacity: .05; }
}
`;

/* ---------------------------------------------------------
   Copy: says what happened and what to do next.
   --------------------------------------------------------- */

function resolveError({
  code,
  title,
  description,
  detail,
  routeError,
}: ErrorPageProps & { routeError: unknown }): ResolvedError {
  if (title) {
    return {
      code: String(code ?? "Error"),
      title,
      description: description ?? COPY.generic.description,
      detail,
    };
  }

  if (isRouteErrorResponse(routeError)) {
    const preset = COPY[String(routeError.status)] ?? COPY.generic;
    return {
      code: String(code ?? routeError.status),
      title: preset.title,
      description: description ?? preset.description,
      detail: detail ?? routeError.statusText,
    };
  }

  if (routeError instanceof Error) {
    return {
      code: String(code ?? "Error"),
      title: COPY.generic.title,
      description: description ?? COPY.generic.description,
      detail: detail ?? routeError.message,
    };
  }

  const preset = COPY[String(code)] ?? COPY.generic;
  return {
    code: String(code ?? "Error"),
    title: preset.title,
    description: description ?? preset.description,
    detail,
  };
}

const COPY: Record<string, { title: string; description: string }> = {
  "404": {
    title: "This link doesn't lead anywhere",
    description:
      "The short link you followed has expired, was deleted, or never existed. Check the address, or create a new link.",
  },
  "403": {
    title: "This link is private",
    description:
      "You need permission to open this link. Ask the person who created it to share access.",
  },
  "410": {
    title: "This link has expired",
    description:
      "The person who created this link set it to expire, and that date has passed.",
  },
  "500": {
    title: "Something broke on our end",
    description:
      "The server ran into a problem handling your request. Try again in a moment.",
  },
  generic: {
    title: "Something went wrong",
    description:
      "We couldn't load this page. Try again, or head back to shorten a new link.",
  },
};
