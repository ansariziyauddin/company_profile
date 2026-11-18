'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-text-dark mb-4">Something went wrong</h1>
        <p className="text-text-muted leading-relaxed mb-8">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent1 text-white font-semibold rounded-xl hover:bg-accent2 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-accent1 text-accent1 font-semibold rounded-xl hover:bg-accent1/5 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
