import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-accent1 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-8">
          IT
        </div>
        <h1 className="text-6xl font-extrabold text-text-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-dark mb-3">Page Not Found</h2>
        <p className="text-text-muted leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent1 text-white font-semibold
                     rounded-xl hover:bg-accent2 transition-colors shadow-accent"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
