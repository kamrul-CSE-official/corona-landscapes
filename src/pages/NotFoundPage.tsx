import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f0] px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-serif text-[#1a2e30] mb-4 italic">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif text-[#1a2e30] mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#1a2e30] text-white px-8 py-3 text-sm font-bold tracking-wide uppercase hover:bg-[#b3ced1] hover:text-[#1a2e30] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;